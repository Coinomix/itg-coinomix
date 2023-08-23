import React from "react";
import arrowIcon from "../../assets/images/arrow_icon.svg";

interface Props {
  imgUrl?: string;
}

export const CardNewsSmall: React.FC<Props> = ({
  imgUrl,
}) => {
  return (
    <div className="cardnews-small">
      {imgUrl && (
        <img 
          src={imgUrl} 
          className="cardnews-small__image"
        />
      )}
      <div className="cardnews-small__content">
        <div className="cardnews-small__head">
          <div className="cardnews-small__tags">
            <a href="#bitcoin" className="cardnews-small__tagname">Bitcoin</a>
            <a href="#trading" className="cardnews-small__tagname">Trading</a>
          </div>

          <a href="/">
            <img className="cardnews-small__arrowicon" src={arrowIcon} alt="Arrow Icon" />
          </a>
        </div>

        <div className="cardnews-small__title">
          <a href="/" className="cardnews-small__title-link">
            Bitcoin offshore and the end of mining: how the world of cryptocurrencies is changing in 2023
          </a>
        </div>
      </div>
    </div>
  );
};
