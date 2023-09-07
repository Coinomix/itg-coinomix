import React from "react";
import "./Footer.scss";
import logoCoinomix from "../../assets/images/coinimix-logo.svg";
import iconlogoCoinomix from "../../assets/images/footer/itg_logo.svg";
import iconTelegram from "../../assets/images/footer/telegram.svg";
import iconInstagram from "../../assets/images/footer/instagram.svg";
import iconYoutube from "../../assets/images/footer/youtube.svg";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <Link to="/">
          <img src={logoCoinomix} alt="Coinimix logo" className="header__logo" />
        </Link>
        <div className="footer__social">
          <a href="https://itg-investments.com">
            <img className="footer__icons" src={iconlogoCoinomix} alt="ITG logo Icon" />
          </a>
          <a href="https://t.me">
            <img className="footer__icons" src={iconTelegram} alt="Telegram Icon" />
          </a>
          <a href="https://instagram.com">
            <img className="footer__icons" src={iconInstagram} alt="Instagram Icon" />
          </a>
          <a href="https://youtube.com">
            <img className="footer__icons" src={iconYoutube} alt="YouTube Icon" />
          </a>
        </div>
      </div>

      <div className="footer__container footer__container-mobile">
        <div className="footer__copyrights">Coinomix © 2023 All Rights Reserved</div>
        <ul className="footer__pages">
          <li>
            <a className="footer__link" href="#">Privacy Policy</a>
          </li>
          <li>
            <a className="footer__link" href="#">Terms</a>
          </li>
          <li>
          <a className="footer__link" href="#">Cookies</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
