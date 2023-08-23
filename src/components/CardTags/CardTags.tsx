import React from "react";
import arrowIcon from "../../assets/images/arrow_icon.svg";

export const CardTags = () => {

  return (
    <div className="cardtags">
      <div className="cardtags__tags">
        <a href="#bitcoin" className="cardtags__tagname">Bitcoin</a>
        <a href="#trading" className="cardtags__tagname">Trading</a>
      </div>

      <a href="/">
        <img className="cardtags__arrowicon" src={arrowIcon} alt="Arrow Icon" />
      </a>
    </div>
  );
};
