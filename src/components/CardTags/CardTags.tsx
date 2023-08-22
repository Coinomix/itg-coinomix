import React from "react";
import arrowIcon from "../../assets/images/arrow_icon.svg";

interface Props {
  bgImageUrl?: string;
  isArrowIcon?: boolean;
  isTitle?: boolean;
}

export const CardTags: React.FC<Props> = ({
  bgImageUrl,
  isArrowIcon = true,
  isTitle = true,
}) => {

  const cardTagsStyle = {
    backgroundImage: `url(${bgImageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="cardtags" style={cardTagsStyle}>
      <div className="cardtags__head">
        <div className="cardtags__tags">
          <a href="#bitcoin" className="cardtags__tagname">Bitcoin</a>
          <a href="#trading" className="cardtags__tagname">Trading</a>
        </div>

        {isArrowIcon && (
        <a href="/">
          <img className="cardtags__arrowicon" src={arrowIcon} alt="Arrow Icon" />
        </a>
        )}
      </div>

      {isTitle && (
          <div className="cardtags__title">
          <a href="/" className="cardtags__title-link">
            Bitcoin offshore and the end of mining: how the world of cryptocurrencies is changing in 2023
          </a>
        </div>
      )}
      
    </div>
  );
};
