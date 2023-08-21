import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logoCoinomix from "../../assets/images/coinimix-logo.svg"
import demoUserImage from "../../assets/images/header/demo_user.png"


export const Header = () => {
  const [isDemoUser, setIsDemoUser] = useState(true);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <header className="header">
      <button className="header__burger"></button>
      <a href="/">
        <img className="coinimix-logo" alt="Coinimix logo" src={logoCoinomix} />
      </a>
      {isDemoUser ? (
        <div className="header__user">
          <img className="header__user-photo" src={demoUserImage} alt="Demo user photo" onClick={isDemoUser => setIsDemoUser(!isDemoUser)} />
        </div>
      ) : (
        <div className="header__no-user" onClick={() => setIsDemoUser(true)}></div>
      )}
    </header>
  );
};
