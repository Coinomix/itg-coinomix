import React, { useState } from "react";
import "./Header.scss";
import logoCoinomix from "../../assets/images/coinimix-logo.svg";
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
      </Link>

      <SignIn />

 
    </header>
  );
};
