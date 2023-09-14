import React, { useState } from "react";
import "../assets/styles/scss/subscribe-page.scss";
import { HeadFC, Link, navigate } from "gatsby";
import { CardPlan } from "../components/CardPlan";
import { Header } from "../components/Header";
import { PlanType } from "../types/enums";
import { PlanToggler } from "../components/PlanToggler";
import { CardPayPlan } from "../components/CardPayPlan";

const SubscribePage = () => {
  const [isYearly, setIsYearly] = useState(true);
  const [PayPlanType, setPayPlanType] = useState<PlanType | null>(null);

  const handlePlanChange = () => {
    setIsYearly((prevState) => !prevState);
  };

  const handleClickPay = (plan: PlanType) => {
    setPayPlanType(() => plan);
  };

  const handleFinishPay = () => {
    navigate("/payed");
  }

  return (
    <>
      <Header />

      <main className="subscribe-page">
        <div className="subscribe-page__container">
          {PayPlanType
            ? (
              <>
                <div className="subscribe-page__close" onClick={() => setPayPlanType(null)}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path d="M5.50586 6.01562L22.4764 22.9862" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" />
                    <path d="M5 22.9688L21.9706 5.99819" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" />
                  </svg>
                </div>

                <div className="subscribe-page__cardpayplan">
                  <CardPayPlan type={PayPlanType} isYear={isYearly} onPay={handleFinishPay} />
                </div>
              </>
            )
            : (
              <>
                <Link to="javascript:history.back()" className="subscribe-page__close">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path d="M5.50586 6.01562L22.4764 22.9862" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" />
                    <path d="M5 22.9688L21.9706 5.99819" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" />
                  </svg>
                </Link>
                <div>
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
                    <CardPlan type={PlanType.lite} isYear={isYearly} onClick={handleClickPay} />

                    <CardPlan type={PlanType.basic} isYear={isYearly} onClick={handleClickPay} />

                    <CardPlan type={PlanType.premium} isYear={isYearly} onClick={handleClickPay} />
                  </div>
                </div>
              </>
            )
          }

        </div>
      </main>
    </>
  );
};

export default SubscribePage;

export const Head: HeadFC = () => <title>Subscribe Page | Coinomix</title>
