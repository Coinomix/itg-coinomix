import React from "react";
import "./CardPlan.scss";
import { CustomButton } from "../CustomButton";
import { ButtonType, PlanType } from "../../types/enums";
import classNames from "classnames";

interface Props {
  type?: PlanType,
};

const planLiteOptions = [
  {option: '24/7 Live updates', include: true},
  {option: 'In-depth investigations', include: true},
  {option: '200+original stories daily', include: true},
  {option: 'Unlimited access', include: false},
  {option: 'Unlimited access', include: false},
  {option: 'Unlimited access', include: false},
];

const planBasicOptions = [
  {option: '24/7 Live updates', include: true},
  {option: 'In-depth investigations', include: true},
  {option: '200+original stories daily', include: true},
  {option: '200+original stories daily', include: true},
  {option: 'Unlimited access', include: false},
  {option: 'Unlimited access', include: false}, 
];

const planPremiumOptions = [
  {option: '24/7 Live updates', include: true},
  {option: 'In-depth investigations', include: true},
  {option: '200+original stories daily', include: true},
  {option: 'Unlimited access', include: true},
  {option: 'Unlimited access', include: true},
  {option: 'Unlimited access', include: true},
];

export const CardPlan: React.FC<Props> = ({ type }) => {
  return (
    <div className="card-plan">
      <div className="card-plan__header">
        <div className="card-plan__title">
          Lite plan
        </div>
        <div className="card-plan__price">
          $29,99
        </div>
        <div className="card-plan__period">
          Per year
        </div>
      </div>
      <div className="card-plan__button">
        <CustomButton text="Subscribe" type={ButtonType.subscribe_yellow} />
      </div>
      <div className="card-plan__content">
        <ul className="card-plan__options">
          {planLiteOptions.map((option, index) => 
            <li key={index} className={classNames('card-plan__option', { 'card-plan__option-true': option.include })}>{option.option}</li>
          )}
        </ul>
      </div>
      <div className="card-plan__readmore">
        <a href="#" className="card-plan__readmore-link">Read more this plan</a>
      </div>
    </div>
  )
};
