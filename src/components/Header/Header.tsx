import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { StaticImage } from "gatsby-plugin-image";
import logoCoinomix from "../../assets/images/coinimix-logo.svg";
import demoUserImage from "../../assets/images/header/demo_user.jpg";
import { SingIn } from "../SingIn";


export const Header = () => {
  const [isDemoUser, setIsDemoUser] = useState(true);
  const [modalShow, setModalShow] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <header className="header">
      <button className="header__burger" onClick={handleShow} />
      <a href="/">
        <StaticImage className="coinimix-logo" alt="Coinimix logo" src="../../assets/images/coinimix-logo.svg" />
      </a>
      {isDemoUser ? (
        <div className="header__user">
          <img className="header__user-photo" src={demoUserImage} alt="Demo user photo" onClick={isDemoUser => setIsDemoUser(!isDemoUser)} />
        </div>
      ) : (
        <div className="header__no-user" onClick={() => setIsDemoUser(true)}></div>
      )}

        <div className="header__no-user" onClick={() => setModalShow(true)}></div>

        <SingIn 
          show={modalShow}
          onHide={() => setModalShow(false)}
        />

        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
          </Offcanvas.Header>`
          <Offcanvas.Body>
            Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc.
          </Offcanvas.Body>
      </Offcanvas>
    </header>
  );
};
