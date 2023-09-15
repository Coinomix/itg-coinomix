import React from "react";
import "./SignIn.scss";
import { CustomButton } from "../../CustomButton";
import { ButtonType } from "../../../types/enums";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

export const SignIn = () => {
  return (
    <div className='signin'>
      <div className="signin__title">
        Sign in
      </div>
      <div className="cardpayplan__form">
        <label className="cardpayplan__label">
          Email address
        </label>
        <input 
          type="email"
          name="email"
          placeholder=""
          className="cardpayplan__input"
          pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
          required
          />

        <label className="cardpayplan__label">
          Password
        </label>
        <input 
          type="password"
          name="password"
          placeholder=""
          className="cardpayplan__input"
          required
          />
      </div>
      
      <Link to="/blogs" className="signin__button">
        <CustomButton text="Next" type={ButtonType.signin} />
      </Link>
    </div>
  );
};
