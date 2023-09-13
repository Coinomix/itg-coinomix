import React, { useState } from "react";
import "../assets/styles/scss/subscribe-page.scss";
import { HeadFC } from "gatsby";
import { Header } from "../components/Header";
import { CardPayPlan } from "../components/CardPayPlan";
import { PlanType } from "../types/enums";

const PayPage = () => {
  const [isYearly, setIsYearly] = useState(true);

  const handlePlanChange = () => {
    setIsYearly((prevState) => !prevState);
  }

  return (
    <>
      <Header />

      <main className="subscribe-page">
        <div className="subscribe-page__container">
          <CardPayPlan />
        </div> 
      </main>
    </>
  );
};

export default PayPage;

export const Head: HeadFC = () => <title>Pay Page | Coinomix</title>
