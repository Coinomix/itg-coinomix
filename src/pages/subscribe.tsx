import React, { useEffect, useState } from "react";
import "../assets/styles/scss/subscribe-page.scss"
import { HeadFC, Link } from "gatsby";
import { CardPlan } from "../components/CardPlan";
import { Header } from "../components/Header";
import { PlanType } from "../types/enums";
import { PlanToggler } from "../components/PlanToggler";

const SubscribePage = () => {
  const [isYearly, setIsYearly] = useState(true);

  const handlePlanChange = () => {
    setIsYearly((prevState) => !prevState);
  }

  useEffect(() => {
    console.log(isYearly);
  }, [isYearly]);

  return (
    <>
      <Header />

      <main className="subscribe-page">
        <div className="subscribe-page__container">
          <Link to="javascript:history.back()" className="subscribe-page__close">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
              <path d="M5.50586 6.01562L22.4764 22.9862" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round"/>
              <path d="M5 22.9688L21.9706 5.99819" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </Link>
          <div className="subscribe-page__title">
            Choose your plan
          </div>
          <div className="subscribe-page__plantoggler">
            <PlanToggler changed={handlePlanChange} />
          </div>
          <div className="subscribe-page__cancel">
            You can cancel anytime.
          </div>
          <div className="subscribe-page__plans">
            <CardPlan type={PlanType.lite} isyear={isYearly} />

            <CardPlan type={PlanType.basic} isyear={isYearly} />

            <CardPlan type={PlanType.premium} isyear={isYearly} />
          </div>
        </div> 
      </main>
    </>
  );
};

export default SubscribePage;

export const Head: HeadFC = () => <title>Subscribe Page | Coinomix</title>
