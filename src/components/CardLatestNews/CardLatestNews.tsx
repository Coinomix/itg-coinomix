import React from "react";
import "./CardLatestNews.scss";

export const CardLatestNews = () => {
  return (
    <div className="card-latest-news">
      <div className="card-latest-news__header">
        <div className="card-latest-news__author">
            <a href="#/" className="card-latest-news__author-link">by Chris Moore</a>
            <p className="card-latest-news__author-date">January 2, 2023</p>
            <p className="card-latest-news__author-date">9:00 AM GMT</p>
        </div>
        <div className="card-latest-news__tags">
          <div className="card-latest-news__tag"># Bitcoin</div>
          <div className="card-latest-news__tag"># Beginners</div>
        </div>
      </div>
      <div className="card-latest-news__body">Body</div>
      <div className="card-latest-news__footer">Footer</div>
    </div>
  )
}