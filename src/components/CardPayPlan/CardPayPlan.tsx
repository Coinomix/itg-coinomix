import React from "react";
import classNames from "classnames";
import "./CardPayPlan.scss";
import { CustomButton } from "../CustomButton";
import { ButtonType, PlanType } from "../../types/enums";
import {PaymentsMethods} from "../../assets/images/payments_methods.svg";
import TextField from '@mui/material/TextField';
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

interface Props {
  type: PlanType,
  isYear: boolean,
};

const planData = {
  [PlanType.lite]: {
    title: 'Lite plan',
    subscribeType: ButtonType.subscribe_yellow,
    yearCost: '29,99',
    monthCost: '3,99',
    options: [
      { option: '24/7 Live updates', include: true },
      { option: 'In-depth investigations', include: true },
      { option: '200+ original stories daily', include: true },
      { option: 'Unlimited access', include: false },
      { option: 'Unlimited access', include: false },
      { option: 'Unlimited access', include: false },
    ],
  },
  [PlanType.basic]: {
    title: 'Basic plan',
    subscribeType: ButtonType.subscribe_blue,
    yearCost: '59,99',
    monthCost: '6,99',
    options: [
      { option: '24/7 Live updates', include: true },
      { option: 'In-depth investigations', include: true },
      { option: '200+ original stories daily', include: true },
      { option: '200+ original stories daily', include: true },
      { option: 'Unlimited access', include: false },
      { option: 'Unlimited access', include: false },
    ],
  },
  [PlanType.premium]: {
    title: 'Premium plan',
    subscribeType: ButtonType.subscribe_purple,
    yearCost: '99,99',
    monthCost: '10,99',
    options: [
      { option: '24/7 Live updates', include: true },
      { option: 'In-depth investigations', include: true },
      { option: '200+ original stories daily', include: true },
      { option: 'Unlimited access', include: true },
      { option: 'Unlimited access', include: true },
      { option: 'Unlimited access', include: true },
    ],
  },
};

export const CardPayPlan: React.FC<Props> = ({ type, isYear }) => {
  const { title, subscribeType, yearCost, monthCost } = planData[type || PlanType.lite];

  return (
    <div className='cardpayplan'>
      <div className="cardpayplan__header">
        <div className="cardpayplan__blocktitle">
          Total billed today
        </div>
        <div className={classNames('cardpayplan__title', { [`cardpayplan__title-${type}`]: type })}>
          {title}
        </div>
        <div className="cardpayplan__price">
        {isYear 
          ? `$${yearCost}`
          : `$${monthCost}`
          }
        </div>
        <div className="cardpayplan__period">
          {isYear 
          ? ('Per year') 
          : ('Per month')
          }
        </div>
      </div>
      <div className="cardpayplan__paybuttons">
          <span className="cardpayplan__text">Pay with</span>

          <Link to="#" className="cardpayplan__button">
            <CustomButton text="GooglePay" type={ButtonType.signin} />
          </Link>

          <Link to="#"  className="cardpayplan__button">
            <CustomButton text="ApplePay" type={ButtonType.signup} />
          </Link>
      </div>
      <div>
        <hr />
        <span className="cardpayplan__or">
          or
        </span>
        <hr />
      </div>
      <div>
        <span className="cardpayplan__text">Pay with credit or debit card</span>
        <GatsbyImage alt="Payments methods" image={PaymentsMethods} />
      </div>
        <div className="cardpayplan__form">
          <label>Number card
            <input type="text" />
          </label>
        <div className="cardpayplan__exp">
          <div>
            <label>Expiration
              <input type="text" />
            </label>
          </div>
          <div>
            <label>Security code
              <input type="text" />
            </label>
          </div>
        </div>
      </div>
      <div className="cardpayplan__button">
        <CustomButton text="Pay with credit or debit card" type={subscribeType} />
      </div>
    </div>
  );
};
