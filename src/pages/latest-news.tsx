import * as React from "react";
import "../assets/styles/scss/latest-news-page.scss"
import { Link, type HeadFC } from "gatsby";
import { Header } from "../components/Header";
import { Devider } from "../components/Devider";
import { PageTitle } from "../components/PageTitle";
import { CardLatestNews } from "../components/CardLatestNews";
import { BlockRecommendedFollow } from "../components/BlockRecommendedFollow";
import { BlockJoinUs } from "../components/BlockJoinUs";
import { BlockPageLinks } from "../components/BlockPageLinks";

const LatestNewsPage = () => {
  return (
    <>
      <Header />

      <PageTitle
          title="Latest news"
          breadcrumbsTitle=""
      />

      <main className="latest-news-page">
        <div className="latest-news-page__container">
          <div className="latest-news-page__content">
            <div className="latest-news-page__filters">
              <div className="latest-news-page__tabs">
                <a href="#/" className="latest-news-page__tab latest-news-page__tab-active">Latest news</a>
                <a href="#/" className="latest-news-page__tab" >All news</a>
              </div>
              <div className="latest-news-page__search">
                <input type="text" className="latest-news-page__input" />
              </div>
            </div>
            <CardLatestNews />

            <CardLatestNews />

            <CardLatestNews />

            <CardLatestNews />

            <CardLatestNews />
          </div>
          <div className="latest-news-page__sidebar">

            <BlockRecommendedFollow />

            <BlockJoinUs />

            <BlockPageLinks />
          </div>
        </div> 
      </main>
    </>
  );
};

export default LatestNewsPage;

export const Head: HeadFC = () => <title>Latest News Page | Coinomix</title>
