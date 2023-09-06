import * as React from "react";
import "../assets/styles/scss/blogs-page.scss"
import { Link, type HeadFC } from "gatsby";
import { Header } from "../components/Header";
import "../assets/styles/scss/index.scss";
import { Devider } from "../components/Devider";
import { PageTitle } from "../components/PageTitle";
import { CardLatestNews } from "../components/CardLatestNews";
import { BlockRecommendedFollow } from "../components/BlockRecommendedFollow";
import { BlockJoinUs } from "../components/BlockJoinUs";
import { BlockLatestNews } from "../components/BlockLatestNews";
import { CardPost } from "../components/CardPost";
import { BlockPageLinks } from "../components/BlockPageLinks";

const BlogsPage = () => {
  return (
    <>
      <Header />

      <PageTitle
          title="Blogs"
          breadcrumbsTitle="Home"
      />

      <main className="blogs-page">
        <div className="blogs-page__container">
          <div className="blogs-page__content">
            <div className="blogs-page__filters">
              <div className="blogs-page__tabs">
                <a href="#/" className="blogs-page__tab blogs-page__tab-active">Trending posts</a>
                <a href="#/" className="blogs-page__tab">Following</a>
                <a href="#/" className="blogs-page__tab">Best for you</a>
              </div>
              <div className="blogs-page__search">
                <input type="text" className="blogs-page__input" />
              </div>
            </div>
            <CardPost />

            <CardPost />

            <CardPost />

            <CardPost />

            <CardPost />

          </div>
          <div className="blogs-page__sidebar">
            <BlockLatestNews />

            <BlockRecommendedFollow />

            <BlockJoinUs />

            <BlockPageLinks />
          </div>
        </div> 
      </main>
    </>
  );
};

export default BlogsPage;

export const Head: HeadFC = () => <title>Blogs Page | Coinomix</title>
