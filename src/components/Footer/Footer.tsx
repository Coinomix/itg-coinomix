import React from "react";
import logoCoinomix from "../../assets/images/coinimix-logo.png"


export const Footer = () => {
  return (
    <div className="header">
      <div className="header__burger"></div>
      <img className="header__coinimix-logo" alt="Coinimix logo" src={logoCoinomix}/>
      {/* <img className="header__no-user" alt="" src="../../../static/images/not_user.svg" /> */}
      <div className="header__no-user"></div>
    </div>
  );
};
