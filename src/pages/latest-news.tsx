import * as React from "react";
import { Link, type HeadFC } from "gatsby";
import { Header } from "../components/Header";
import "../assets/styles/scss/index.scss";
import { Devider } from "../components/Devider";
import { CardBanner } from "../components/CardBanner";
import { PageTitle } from "../components/PageTitle";
import { CardLatestNews } from "../components/CardLatestNews";

const LatestNewsPage = () => {
  return (
    <>
      <Header />

      <main className="main">
        <PageTitle
            title="Latest news"
            breadcrumbsTitle="Home"
        />

        <Devider />

        <CardLatestNews />
          
      </main>
    </>
  )
}

export default LatestNewsPage;

export const Head: HeadFC = () => <title>About Page</title>
