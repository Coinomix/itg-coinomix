import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import logoCoinomix from "../../assets/images/coinimix-logo.svg";
import demoUserImage from "../../assets/images/header/demo_user.jpg";
import { Link } from "gatsby";
import SidebarLeft from "../SidebarLeft/SidebarLeft";
import { SignIn } from "../SignIn";


export const Header = () => {
  const [isDemoUser, setIsDemoUser] = useState(true);

  return (
    <header className="header">

      <SidebarLeft />
      
      <Link to="/">
        <img src={logoCoinomix} alt="Coinimix logo" className="header__logo" />
        {/* <StaticImage className="coinimix-logo" alt="Coinimix logo" src="../../assets/images/coinimix-logo.svg" /> */}
      </Link>

      {/* {isDemoUser ? (
        <div className="header__user">
          <img className="header__user-photo" src={demoUserImage} alt="Demo user photo" onClick={isDemoUser => setIsDemoUser(!isDemoUser)} />
        </div>
      ) : (
        <div className="header__no-user" onClick={() => setIsDemoUser(true)}></div>
      )}

        <div className="header__no-user" onClick={handleClick}></div> */}

      <SignIn />

 
    </header>
  );
};
