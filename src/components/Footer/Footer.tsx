import React from "react";
import logoCoinomix from "../../assets/images/coinimix-logo.png";
import iconlogoCoinomix from "../../assets/images/footer/itg_logo.png";
import iconTelegram from "../../assets/images/footer/telegram.png";
import iconInstagram from "../../assets/images/footer/instagram.png";
import iconYoutube from "../../assets/images/footer/youtube.png";


export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <img className="coinimix-logo" alt="Coinimix logo" src={logoCoinomix} />
        <div className="footer__container-social">
          <a href="https://itg-investments.com/"><img className="footer__icons" src={iconlogoCoinomix} alt="ITG logo Icon" /></a>
        </div>
      </div>

      <div className="footer__container">
        <img className="coinimix-logo" alt="Coinimix logo" src={logoCoinomix} />
        <div className="footer__social">
          <a href="https://itg-investments.com"><img className="footer__icons" src={iconlogoCoinomix} alt="ITG logo Icon" /></a>
          <a href="https://t.me"><img className="footer__icons" src={iconTelegram} alt="Telegram Icon" /></a>
          <a href="https://instagram.com"><img className="footer__icons" src={iconInstagram} alt="Instagram Icon" /></a>
          <a href="https://youtube.com"><img className="footer__icons" src={iconYoutube} alt="YouTube Icon" /></a>
        </div>
      </div>
    </div>
  );
};
