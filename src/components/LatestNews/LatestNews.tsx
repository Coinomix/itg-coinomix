import React from "react";
import arrowIcon from "../../assets/images/arrow_icon.svg";

export const LatestNews = () => {
  return (
    <div className="latestnews">
      <div className="latestnews__head">
        <h2 className="latestnews__title">Latest news</h2>
        <a href="/">
          <img className="latestnews__arrowicon" src={arrowIcon} alt="Latest news icon" />
        </a>
      </div>
      
      <div className="latestnews__container">
        <div className="latestnews__item">
          <a href="/" className="latestnews__item-link">
            <h3 className="latestnews__item-title">Bitcoin offshore and the end of mining: how the world of cryptocurrencies is changing in 2023</h3>
          </a>
          <p className="latestnews__item-description">Bitcoin offshore and the end of mining: how the world of cryptocurrencies is changing in 2023</p>
          <hr className="latestnews__item-hr" />
        </div>

        <div className="latestnews__item">
          <a href="/" className="latestnews__item-link">
            <h3 className="latestnews__item-title">Bitcoin offshore and the end of mining: how the world of cryptocurrencies is changing in 2023</h3>
          </a>
          <p className="latestnews__item-description">Bitcoin offshore and the end of mining: how the world of cryptocurrencies is changing in 2023</p>
          <hr className="latestnews__item-hr" />
        </div>

        <div className="latestnews__item">
          <a href="/" className="latestnews__item-link">
            <h3 className="latestnews__item-title">Bitcoin offshore and the end of mining: how the world of cryptocurrencies is changing in 2023</h3>
          </a>
          <p className="latestnews__item-description">Bitcoin offshore and the end of mining: how the world of cryptocurrencies is changing in 2023</p>
          <hr className="latestnews__item-hr" />
        </div>

        <div className="latestnews__item">
          <a href="/" className="latestnews__item-link">
            <h3 className="latestnews__item-title">Bitcoin offshore and the end of mining: how the world of cryptocurrencies is changing in 2023</h3>
          </a>
          <p className="latestnews__item-description">Bitcoin offshore and the end of mining: how the world of cryptocurrencies is changing in 2023</p>
          <hr className="latestnews__item-hr" />
        </div>
      </div>
      
    </div>
  );
};
