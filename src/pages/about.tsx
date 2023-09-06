import * as React from "react";
import { Link, type HeadFC } from "gatsby";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import "../assets/styles/scss/index.scss";
import { Devider } from "../components/Devider";
import { CardBanner } from "../components/CardBanner";
import { PageTitle } from "../components/PageTitle";
import imgLaptopOne from "../assets/images/demo/laptop_1.jpg";

const AboutPage = () => {
  return (
    <>
      <Header />

      <PageTitle 
            title="About us"
            breadcrumbsTitle="Home"
      />

      <main className="main">
          <CardBanner height="406px" imgUrl={imgLaptopOne} />

          <div className="article__content">
            <p className="article__content-text">
              Lorem ipsum dolor sit amet consectetur. Tortor posuere tempus turpis quisque adipiscing faucibus sem vulputate magna. Turpis nisl lectus ipsum tortor sit convallis egestas nullam tristique. Lacus facilisis risus.
            </p>
            <p className="article__content-text">
              Lorem ipsum dolor sit amet consectetur. Suspendisse rhoncus nulla integer nunc convallis facilisis magnis sit eu. Velit montes lorem varius ut sollicitudin faucibus nec rhoncus. Et elementum dignissim erat facilisis consequat ultrices diam. Amet vitae posuere urna cursus varius rhoncus...
            </p>
          </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default AboutPage;

export const Head: HeadFC = () => <title>About Page</title>
