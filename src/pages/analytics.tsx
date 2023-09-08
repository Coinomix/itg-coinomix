import * as React from "react";
import type { HeadFC } from "gatsby";
import { Link } from "gatsby";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import "../assets/styles/scss/index.scss";
import { CardNews } from "../components/CardNews";
import { CardNewsTop } from "../components/CardNewsTop";
import { CardNewsSmall } from "../components/CardNewsSmall";
import { Devider } from "../components/Devider";
import { CardNewsType } from "../types/enums";

import imgBitcoin  from "../assets/images/demo/bitcoin.jpg";
import imgAppleLaptop from "../assets/images/demo/apple_laptop.jpg";
import imgLaptopOne from "../assets/images/demo/laptop_1.jpg";
import imgLaptopTwo from "../assets/images/demo/laptop_2.jpg";
import imgLaptopThree from "../assets/images/demo/laptop_3.jpg";
import imgLaptopFour from "../assets/images/demo/laptop_4.jpg";
import imgSmartphoneOne from "../assets/images/demo/smartphone_1.jpg";
import imgSmartphoneTwo from "../assets/images/demo/smartphone_2.jpg";
import imgGpaphOne from "../assets/images/demo/graph_1.jpg";
import imgGpaphTwo from "../assets/images/demo/graph_2.jpg";
import imgEthereum from "../assets/images/demo/ethereum.png";
import imgDemoOne from "../assets/images/demo/demo_1.jpg";
import { PageTitle } from "../components/PageTitle";

const AnalyticsPage = () => {
  return (
    <>
      <Header />

      <PageTitle 
            title="Analytics"
            breadcrumbsTitle="Home"
      />

      <main className="main">
        <div className="main__categories">
          <div className="main__categories-container">
            <a href="#/" className="main__categories-link main__categories-active">Finance</a>
            <a href="#/" className="main__categories-link">Economy</a>
            <a href="#/" className="main__categories-link">Articles</a>
            <a href="#/" className="main__categories-link">Web 3.0</a>
            <a href="#/" className="main__categories-link">Mining</a>
            <a href="#/" className="main__categories-link">Investments</a>
          </div>
        </div>

        <div className="main__container-latestnews">
          <div className="main__macroeconomics-container">
            <CardNewsSmall imgUrl={imgGpaphOne} />
            <CardNewsSmall imgUrl={imgEthereum} />
          </div>

          <div>
            <CardNews type={CardNewsType.top} imgUrl={imgBitcoin} />
          </div>
        </div>

        <div className="main__section">
            <h2 className="main__section-title">More analytics</h2>
            <a href="#" className="main__section-readmore">Read more</a>
        </div>

        <div className="main__container-latestnews">
          <div className="main__macroeconomics-container">
            <CardNewsSmall imgUrl={imgGpaphOne} />
            <CardNewsSmall imgUrl={imgEthereum} />
          </div>

          <div>
            <CardNews type={CardNewsType.top} imgUrl={imgLaptopOne} />
          </div>
        </div>

        <Devider />

        <CardNews imgUrl={imgLaptopTwo} />

        <div className="main__section">
            <h2 className="main__section-title">Must to read</h2>
            <a href="/" className="main__section-readmore">Read more</a>
        </div>

        <CardNewsTop />

        <Devider />

        <div className="main__container-latestnews">
          <CardNewsSmall imgUrl={imgLaptopThree} />
          <CardNewsSmall imgUrl={imgLaptopFour} />
          <CardNewsSmall />
        </div> 
      </main>

    <footer>
      <Footer />
    </footer>
    </>
  )
}

export default AnalyticsPage;

export const Head: HeadFC = () => <title>Analytics Page</title>
