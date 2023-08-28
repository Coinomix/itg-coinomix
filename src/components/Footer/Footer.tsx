import React from "react";
import logoCoinomix from "../../assets/images/coinimix-logo.svg";
import iconlogoCoinomix from "../../assets/images/footer/itg_logo.svg";
import iconTelegram from "../../assets/images/footer/telegram.svg";
import iconInstagram from "../../assets/images/footer/instagram.svg";
import iconYoutube from "../../assets/images/footer/youtube.svg";
import { StaticImage } from "gatsby-plugin-image";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <a href="/">
          <StaticImage className="coinimix-logo" alt="Coinimix logo" src="../../assets/images/coinimix-logo.svg" />
        </a>
        <div className="footer__social">
          <a href="https://itg-investments.com"><StaticImage className="footer__icons" src="../../assets/images/footer/itg_logo.svg" alt="ITG logo Icon" /></a>
          <a href="https://t.me"><StaticImage className="footer__icons" src="../../assets/images/footer/telegram.svg" alt="Telegram Icon" /></a>
          <a href="https://instagram.com"><StaticImage className="footer__icons" src="../../assets/images/footer/instagram.svg" alt="Instagram Icon" /></a>
          <a href="https://youtube.com"><StaticImage className="footer__icons" src="../../assets/images/footer/youtube.svg" alt="YouTube Icon" /></a>
        </div>
      </div>

      <div className="footer__container">
        <div className="footer__copyrights">Coinomix © 2023 All Rights Reserved</div>
        <div className="footer__pages">
          <div className="footer__link-container">
            <a className="footer__link" href="#">Privacy Policy</a>
          </div>

          <div className="footer__link-container">
            <a className="footer__link" href="#">Terms</a>
          </div>

          <div className="footer__link-container">
            <a className="footer__link" href="#">Cookies</a>
          </div>
        </div>
      </div>
    </div>
  );
};
