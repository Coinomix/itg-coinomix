import React from "react";
import "./BlockRecommendedFollow.scss";
import { Link } from "gatsby";

export const BlockRecommendedFollow = () => {
  return (
    <div className="recommended-follow">
      <div className="recommended-follow__header">
        <h3 className="recommended-follow__title">Recommended follow</h3>
        <Link to="#/" className="recommended-follow__viewmore">View more</Link>
      </div>
      
      <div className="recommended-follow__container">
        <div className="recommended-follow__item">
          <a href="#/" className="recommended-follow__item-link">
            <h3 className="recommended-follow__item-title">Bitcoin offshore and the end of mining: how the world of cryptocurrencies is changing in 2023</h3>
          </a>
          <p className="recommended-follow__item-description">Bitcoin offshore and the end of mining: how the world of cryptocurrencies is changing in 2023</p>
          <hr className="recommended-follow__item-hr" />
        </div>
      </div>
    </div>
  );
};
