import React from "react";
import "./CardNewsTop.scss";
import demoUserImage from "../../assets/images/header/demo_user.jpg";
import arrowIcon from "../../assets/images/arrow_icon.svg";
import { CardTags } from "../CardTags";
import { StaticImage } from "gatsby-plugin-image";

export const CardNewsTop = () => {
  return (
    <div className="cardnewstop">
      <div className="cardnewstop__left">
          <img 
            src="https://s3-alpha-sig.figma.com/img/e348/15ec/6d73fc0b2b6ccf273983b85521c605fa?Expires=1694390400&Signature=NFjhrToGeyS38D8~VqOEdayxnOt4QoTATnu~ehWynHM-mul1deuWlRQIrx1-ufNPjsGT8OmrTaOYSqkndIQLxEbYHTUEsw2nXLQp3mhNXWXVdEMaLpP2mw7CFqx1uW9WSTvehaBBf7g-ayEar-M~8z-P0utrz0yQGwIWXjmx34jbm3XSWM8pDad7EISnU5kE-25aEx~igIp5wSUPrkSlLUXSoCuKzZM0lEqStejSFevStE7XBJ3Ybq9WbhaVqo4l4i6vyCNIUgCZq7nwY0JG7JdhWFtgOvkl6QAvMhmPGF8I2ksFkC-UGT-bWokEUVcSjPAXaXUWwgmsLPnArkJ0SA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            className="cardnewstop__image"
          />
        <div className="cardnewstop__tags">
          <CardTags isArrow={false} />
        </div>
      </div>
      <div className="cardnewstop__right">
        <div className="cardnewstop__header">
          <a href="#/">
            <h3 className="cardnewstop__title">
              Bitcoin offshore and the end of mining: how the world of cryptocurrencies is changing in 2023
            </h3>
          </a>
          <p className="cardnewstop__description">
            The decision by the US Securities and Exchange Commission (SEC) to file a complaint against Binance caused frustration in the cryptocurrency community. Binance says it cooperated.
          </p>
        </div>
        <div className="cardnewstop__footer">
          <div className="cardnewstop__author">
            <a href="#/">
              <StaticImage src="../../assets/images/header/demo_user.jpg" alt="Demo user author" className="cardnewstop__author-photo" />
            </a>
            <div className="cardnewstop__author-name">
              <a href="#/" className="cardnewstop__author-link">Chris Moore</a>
              <span className="cardnewstop__date">Sep 10, 2023</span>
            </div>
          </div>
          <a href="#/">
            <img className="cardtags__arrowicon" src={arrowIcon} alt="Arrow Icon" />
          </a>
        </div>
      </div>
    </div>
  );
};
