import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";

// Cache object to store articles
const articleCache = {
  data: {},
  timestamp: {},
  CACHE_DURATION: 5 * 60 * 1000 // 5 minutes in milliseconds
};

const News = ({
  country = 'in',
  pageSize = 6,
  category = 'general',
  setProgress
}) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [error, setError] = useState(null);
  const [isRateLimited, setIsRateLimited] = useState(false);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const getCacheKey = (country, category, page) => `${country}-${category}-${page}`;

  const getFromCache = (country, category, page) => {
    const key = getCacheKey(country, category, page);
    const cached = articleCache.data[key];
    const timestamp = articleCache.timestamp[key];

    if (cached && timestamp && (Date.now() - timestamp < articleCache.CACHE_DURATION)) {
      return cached;
    }
    return null;
  };

  const saveToCache = (country, category, page, data) => {
    const key = getCacheKey(country, category, page);
    articleCache.data[key] = data;
    articleCache.timestamp[key] = Date.now();
  };

  const updateNews = async () => {
    setProgress(10);
    try {
      const apiKey = process.env.REACT_APP_NEWS_API_KEY;
      console.log('API Key status:', apiKey ? 'Present' : 'Missing');

      if (!apiKey) {
        const errorMsg = "API Key is missing. Please ensure your .env.local file is properly set up with REACT_APP_NEWS_API_KEY.";
        console.error(errorMsg);
        setError(errorMsg);
        setLoading(false);
        setProgress(100);
        return;
      }

      // Check cache first
      const cachedData = getFromCache(country, category, page);
      if (cachedData) {
        console.log('Using cached data for:', { category, country, page });
        setArticles(cachedData.articles);
        setTotalResults(cachedData.totalResults);
        setError(null);
        setLoading(false);
        setProgress(100);
        return;
      }
      
      const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}`;
      console.log('Making API request to:', url.replace(apiKey, 'API_KEY_HIDDEN'));
      
      setLoading(true);
      const response = await fetch(url);
      const parsedData = await response.json();
      
      if (parsedData.status === 'error' && parsedData.code === 'rateLimited') {
        setIsRateLimited(true);
        const errorMsg = "API rate limit reached. Please try again later or upgrade your API plan.";
        console.error(errorMsg);
        setError(errorMsg);
        setLoading(false);
        setProgress(100);
        return;
      }

      if (!response.ok || parsedData.status === 'error') {
        const errorMsg = `API Error: ${parsedData.message || response.statusText}`;
        console.error(errorMsg);
        setError(`${errorMsg}. Please try again later.`);
        setLoading(false);
        setProgress(100);
        return;
      }
      
      if (!parsedData.articles || parsedData.articles.length === 0) {
        console.log('No articles returned from API for:', { category, country });
        setArticles([]);
        setTotalResults(0);
        setError(null);
      } else {
        console.log(`Received ${parsedData.articles.length} articles for ${category} category`);
        // Save to cache
        saveToCache(country, category, page, {
          articles: parsedData.articles,
          totalResults: parsedData.totalResults
        });
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults || 0);
        setError(null);
      }
    } catch (err) {
      const errorMsg = `Failed to fetch news: ${err.message}`;
      console.error('Detailed error:', err);
      setError(`${errorMsg}. Please check your internet connection and try again.`);
    } finally {
      setLoading(false);
      setProgress(100);
    }
  }

  useEffect(() => {
    console.log('Component mounted with:', { country, category, pageSize }); // Debug props
    document.title = `${capitalizeFirstLetter(category)} - NewsApp`;
    updateNews();
    // eslint-disable-next-line
  }, []);

  const fetchMoreData = async () => {
    if (isRateLimited) {
      console.log('Skipping fetchMoreData due to rate limiting');
      return;
    }

    try {
      const nextPage = page + 1;
      const cachedData = getFromCache(country, category, nextPage);
      
      if (cachedData) {
        console.log('Using cached data for next page');
        setArticles(current => [...current, ...cachedData.articles]);
        setTotalResults(cachedData.totalResults);
        setPage(nextPage);
        return;
      }

      const apiKey = process.env.REACT_APP_NEWS_API_KEY;
      if (!apiKey) return;

      const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${nextPage}&pageSize=${pageSize}`;
      const response = await fetch(url);
      const parsedData = await response.json();

      if (parsedData.status === 'error' && parsedData.code === 'rateLimited') {
        setIsRateLimited(true);
        return;
      }

      if (parsedData.articles && parsedData.articles.length > 0) {
        saveToCache(country, category, nextPage, {
          articles: parsedData.articles,
          totalResults: parsedData.totalResults
        });
        setArticles(current => [...current, ...parsedData.articles]);
        setTotalResults(parsedData.totalResults || 0);
        setPage(nextPage);
      }
    } catch (err) {
      console.error("Error fetching more news:", err.message);
    }
  };

  if (error) {
    return (
      <div className="container mt-5">
        <div className="alert alert-danger">
          <h4>Error Loading News</h4>
          <p>{error}</p>
          {isRateLimited && (
            <div>
              <hr />
              <p className="mb-0">
                <strong>Why am I seeing this?</strong>
              </p>
              <p>The free NewsAPI plan has a limit of 1,000 requests per day. You've reached this limit. Options:</p>
              <ul>
                <li>Wait for the limit to reset (usually 24 hours)</li>
                <li>Upgrade to a paid plan at <a href="https://newsapi.org/pricing" target="_blank" rel="noopener noreferrer">newsapi.org/pricing</a></li>
              </ul>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <>
      <h1 className="text-center" style={{margin:'35px 0px', marginTop:'90px'}}>
        NewsApp - Top Headlines from {capitalizeFirstLetter(category)}
      </h1>
      {loading && <Spinner/>}
      {!loading && (!articles || articles.length === 0) && (
        <div className="container">
          <div className="alert alert-info">
            <h4>No Articles Found</h4>
            <p>No articles are currently available for {category} category in {country}.</p>
            <p>Please try another category or check back later.</p>
          </div>
        </div>
      )}
      {!loading && articles && articles.length > 0 && (
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
        >
          <div className="container">
            <div className="row">
              {articles.map((element, index) => (
                <div className="col-md-4" key={element.url || index}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 45) : ""}
                    description={element.description ? element.description.slice(0, 88) : ""}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source ? element.source.name : "Unknown"}
                  />
                </div>
              ))}
            </div>
          </div>
        </InfiniteScroll>
      )}
    </>
  );
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
  setProgress: PropTypes.func.isRequired
}

export default News;