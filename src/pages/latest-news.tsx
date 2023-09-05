import * as React from "react";
import "../assets/styles/scss/latest-news-page.scss"
import { Link, type HeadFC } from "gatsby";
import { Header } from "../components/Header";
import "../assets/styles/scss/index.scss";
import { Devider } from "../components/Devider";
import { PageTitle } from "../components/PageTitle";
import { CardLatestNews } from "../components/CardLatestNews";
import { BlockRecommendedFollow } from "../components/BlockRecommendedFollow";
import { BlockJoinUs } from "../components/BlockJoinUs";

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
            {/* <LatestNews />

            <Devider /> */}

            <BlockRecommendedFollow />

            <Devider height="40px" />

            <BlockJoinUs />

            <Devider height="40px" />

            <div className="latest-news-page__pages">
              <Link to="/digital" className="latest-news-page__pages-link">
                Digital
              </Link>
              <Link to="/analytics" className="latest-news-page__pages-link">
                Analytics
              </Link>
              <Link to="/exchange" className="latest-news-page__pages-link">
                Exchange
              </Link>
              <Link to="/directory" className="latest-news-page__pages-link">
                Directory
              </Link>
              <Link to="#" className="latest-news-page__pages-link">
                Blogs
              </Link>
              <Link to="#" className="latest-news-page__pages-link">
                Tags
              </Link>
              <Link to="#" className="latest-news-page__pages-link">
                Privacy Policy
              </Link>
              <Link to="#" className="latest-news-page__pages-link">
                Terms
              </Link>
              <Link to="#" className="latest-news-page__pages-link">
                Cookies
              </Link>
            </div>
          </div>
        </div> 

        <Devider height="140px" />

      </main>
    </>
  );
};

export default LatestNewsPage;

export const Head: HeadFC = () => <title>Latest News Page</title>
