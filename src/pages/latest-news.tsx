import * as React from "react";
import "../assets/styles/scss/latest-news-page.scss"
import { Link, type HeadFC } from "gatsby";
import { Header } from "../components/Header";
import "../assets/styles/scss/index.scss";
import { Devider } from "../components/Devider";
import { PageTitle } from "../components/PageTitle";
import { CardLatestNews } from "../components/CardLatestNews";
import { LatestNews } from "../components/LatestNews";
import { BlockRecommendedFollow } from "../components/BlockRecommendedFollow";

const LatestNewsPage = () => {
  return (
    <>
      <Header />

      <main className="latest-news-page">
        <PageTitle
          title="Latest news"
          breadcrumbsTitle=""
      />

        <div className="latest-news-page__container">
          <div className="latest-news-page__content">
            <CardLatestNews />

            <Devider marginTop="40px" />

            <CardLatestNews />

            <Devider marginTop="40px" />

            <CardLatestNews />
          </div>
          <div className="latest-news-page__sidebar">
            <LatestNews />

            <Devider />

            <BlockRecommendedFollow />
          </div>
        </div> 
      </main>
    </>
  )
}

export default LatestNewsPage;

export const Head: HeadFC = () => <title>Latest News Page</title>
