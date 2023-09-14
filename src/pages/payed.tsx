import React, { useState } from "react";
import "../assets/styles/scss/subscribe-page.scss";
import { HeadFC } from "gatsby";
import { Header } from "../components/Header";
import { Feedback } from "../components/Feedback";
import kapybaraOk from "../assets/images/kapybara-ok.svg";

const PayedPage = () => {
  const [isYearly, setIsYearly] = useState(true);

  const handlePlanChange = () => {
    setIsYearly((prevState) => !prevState);
  }

  return (
    <>
      <Header />

      <main className="subscribe-page">
        <div className="subscribe-page__container">
          <div className="subscribe-page__payed">
            <Feedback link={"/"} imgUrl={kapybaraOk} />
          </div>
        </div> 
      </main>
    </>
  );
};

export default PayedPage;

export const Head: HeadFC = () => <title>Payed Page | Coinomix</title>
