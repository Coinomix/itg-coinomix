import * as React from "react";
import "../assets/styles/scss/subscribe-page.scss"
import { HeadFC } from "gatsby";
import { CardPlan } from "../components/CardPlan/CardPlan";
import { Header } from "../components/Header";

const SubscribePage = () => {
  return (
    <>
      <Header />

      <main className="subscribe-page">
        <div className="subscribe-page__container">
          <div className="subscribe-page__title">
            Choose your plan
          </div>
          <div className="subscribe-page__plans">
            <CardPlan />

            <CardPlan />

            <CardPlan />
          </div>
        </div> 
      </main>
    </>
  );
};

export default SubscribePage;

export const Head: HeadFC = () => <title>Subscribe Page | Coinomix</title>
