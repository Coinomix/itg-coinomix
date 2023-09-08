import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import "../assets/styles/scss/index.scss";
import { CardNews } from "../components/CardNews";
import { CryptoString } from "../components/CryptoString";
import { BlockLatestNews } from "../components/BlockLatestNews";
import { CardNewsTop } from "../components/CardNewsTop";
import { CardNewsSmall } from "../components/CardNewsSmall";
import { CardBanner } from "../components/CardBanner";
import { Devider } from "../components/Devider";
import { CardNewsType } from "../types/enums";

import bannerEpicurus from "../assets/images/banner_epicurus.png";
import bannerItg from "../assets/images/banner_itg.png";
import imgBitcoin from "../assets/images/demo/bitcoin.jpg";
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

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Header />

      <main className="main">
        <div className="main__container">
          <div className="main__container-latestnews">
            <div>
              <CardNews type={CardNewsType.top} imgUrl={imgBitcoin} />
            </div>

            <BlockLatestNews />
          </div>

          <Devider />

          <CryptoString />

          <Devider />

          <CardBanner imgUrl={bannerEpicurus} link="epicurus-new.netlify.app" />

          <div className="main__section">
              <h2 className="main__section-title">Cryptocurrency</h2>
              <a href="/" className="main__section-readmore">Read more</a>
          </div>

          <div className="main__container-latestnews">
            <CardNewsSmall imgUrl={imgAppleLaptop} />
            <CardNewsSmall imgUrl={imgLaptopOne} />
            <CardNewsSmall />
          </div>

          <Devider />

          <CardNewsTop />

          <Devider />

          <CardNews imgUrl={imgLaptopTwo} />

          <div className="main__section">
              <h2 className="main__section-title">Macroeconomics</h2>
              <a href="/" className="main__section-readmore">Read more</a>
          </div>

          <div className="main__macroeconomics">
            <div className="main__macroeconomics-container">
              <CardNews type={CardNewsType.block} imgUrl={imgSmartphoneOne} />
              <CardNews type={CardNewsType.block} />
            </div>
            <div className="main__macroeconomics-container">
              <CardNewsSmall imgUrl={imgGpaphOne} />
              <CardNewsSmall imgUrl={imgEthereum} />
              <CardNewsSmall imgUrl={imgGpaphTwo} />
            </div>
          </div>

          <div className="main__section">
              <h2 className="main__section-title">Stock markets</h2>
              <a href="/" className="main__section-readmore">Read more</a>
          </div>

          <Devider />

          <div className="main__container-latestnews">
            <CardNewsSmall imgUrl={imgLaptopThree} />
            <CardNewsSmall imgUrl={imgLaptopFour} />
            <CardNewsSmall imgUrl={imgDemoOne} />
          </div>

          <Devider />         

          <CryptoString />

          <Devider />

          <CardBanner imgUrl={bannerItg} link="itg-investments.com" />
        </div>
      </main>

    <footer>
      <Footer />
    </footer>
    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page | Coinomix</title>
