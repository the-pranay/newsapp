import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  render() {
    return (
      <div className='container my-3'>
        <h2>NewsApp - Top Headlines</h2>
        <div className="row">
          <div className="col-md-3">
             <NewsItem title="myTitle_1" description="myDscr_1"/>
          </div>
          <div className="col-md-3">
             <NewsItem title="myTitle_1" description="myDscr_1"/>
          </div>
          <div className="col-md-3">
             <NewsItem title="myTitle_1" description="myDscr_1"/>
          </div>
          <div className="col-md-3">
             <NewsItem title="myTitle_1" description="myDscr_1"/>
          </div>
        </div>

      </div>
    )
  }
}

export default News
