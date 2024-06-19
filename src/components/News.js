import React, { useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";

const News=(props) => {

const [articles, setArticles] = useState([]);
const [loading,setLoading]=useState(true)
const [page,setPage]=useState(1)
const [totalResults,setTotalResults]=useState(0)
// document.title=`${capitalizeFirstLetter(props.category)} - NewsApp`;

const capitalizeFirstLetter =(string) =>{
    return string.charAt(0).toUpperCase() + string.slice(1);
}

  const updateNews= async () =>{
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=e2870ad7805b4cff95ea0800dca80234&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true)
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    props.setProgress(100);
  }

  useEffect(() => {
    updateNews();
  },[]);
  

//  const handlePreviousClick = async () => {
//     console.log("previous");
//     setPage(page-1)
//     updateNews();
//   };

//  const handleNextClick = async () => {
//     console.log("next");
//     setPage(page+1)
//     updateNews();
//   };

 const fetchMoreData = async () => {
   setPage(page+1) 
   const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=e2870ad7805b4cff95ea0800dca80234&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  };

  return (
    <>
        <h1 className="text-center" style={{margin:'35px 0px'}}>NewsApp - Top Headlines from {capitalizeFirstLetter(props.category)}</h1>
        {loading && <Spinner/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
        >
      <div className="container">

        <div className="row">
          {articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 45) : ""}
                  description={element.description ? element.description.slice(0, 88) : ""}
                  imageUrl={element.urlToImage}  newsUrl={element.url} author={element.author} date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            );
          })}
        </div>

        </div>
      </InfiniteScroll>
      </>
        

);
  
}
News.defaultProps={
  country:'in',
  pageSize:6,
  category:'general',
  totalResults:0
}

News.propTypes={
  country:PropTypes.string,
  pageSize:PropTypes.number,
  category:PropTypes.string
}

export default News;