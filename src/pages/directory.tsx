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
import imgGpaphTwo from "../asset s/images/demo/graph_2.jpg";
import imgEthereum from "../assets/images/demo/ethereum.png";
import imgDemoOne from "../assets/images/demo/demo_1.jpg";

const DirectoryPage = () => {
  return (
    <>
      <Header />

      <main className="main">
        <div className="main__header">
          <div className="main__breadcrumbs">
            <Link to="/" className="main__breadcrumbs-link">&lt; Home</Link>
          </div>
          <h1 className="main__title">Directory</h1>
          <div></div>
        </div>

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

        {/* <Grid container gap={2}>
          <Grid xs={8}>
          <CardNewsSmall imgUrl="https://s3-alpha-sig.figma.com/img/80d0/b769/e5a8e0aa812a3d77a681355fa99a4a3e?Expires=1693785600&Signature=Z5mKEqV5QRwMR6YvcFFGkLJ9YawtN2I3c1xk1Ct652CM-cStqPYpDvr000pKMrpqAZRbsDWxrXrhHayu6OM5-2lS4VidE7GFd1E3mvEHsm2m24vAsFedV5gUcXGNb2kEN5F6OfYtjX~fFYAIcR0myKdCmM84tn8idFlzBFwsQ7t32-KGtmdlq1Ep~yyMUEUQ5BxQSWG1o6K6sJmCl2LJk4ubxraGfkT-QuqhqxAtwUAKsWAQQr-DtsJlYU29g~4B64LmevPCJFLyLoOCVuOo0nYWG3fBycRexCw6afR82ycRN9weFqogU0NAurQfApt0oC1fq4tOgjUHQ7-WfbJ24g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
          </Grid>
          <Grid xs={4}>
          <CardNewsSmall imgUrl="https://s3-alpha-sig.figma.com/img/f68d/8c6e/5b41a13157af6851a6f794f9c7dbb152?Expires=1693785600&Signature=NwPhiFP~y4JQ4i9Hy8E1Y~YCquGrheze3BerIBBS09rZB~mmuDtBIL6wBLTZrAOa9WEKbLII1QU7uzJsVNyqeErBPTEz4FpF5SLSfXhc5evOB0g9UdUh8NpxrCn~4QTJZ6vSkLTRGbGccYzowvvpqztJK6Fawy3KqEIrKEbRK7W19-KfaTYHYURyCZIYstIn8LCibEj81l-ZhSb9QywyZobADv2VYGqMprB4oDRzt1h5QlyZnNmRny-y-7XjzgGnT8L7M8UeCfdZS73LLw9yJLyhZd7queMfVfbTdfXeFdmljjSOV2XWAIUnkl-iJ-cpshEt6VlI2V85nRbTtaK9yA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
          </Grid>
        </Grid> */}

        <div className="main__container-latestnews">
          <CardNewsSmall imgUrl={imgAppleLaptop} />
          <CardNewsSmall imgUrl={imgLaptopOne} />
          <CardNewsSmall imgUrl={imgLaptopFour} />
        </div>

        <div className="main__section">
            <h2 className="main__section-title">More of finance</h2>
            <a href="#" className="main__section-readmore">Read more</a>
        </div>

        <CardNewsTop />

        <div className="main__section">
            <h2 className="main__section-title">Must to read</h2>
            <a href="/" className="main__section-readmore">Read more</a>
        </div>

        <div className="main__container-latestnews">
          <div className="main__macroeconomics-container">
            <CardNewsSmall imgUrl={imgGpaphOne} />
            <CardNewsSmall imgUrl={imgEthereum } />
          </div>

          <div>
            <CardNews type={CardNewsType.top} imgUrl={imgLaptopOne} />
          </div>
        </div>

        <Devider />

        <CardNews imgUrl={imgLaptopTwo} />     
      </main>

    <footer>
      <Footer />
    </footer>
    </>
  )
}

export default DirectoryPage;

export const Head: HeadFC = () => <title>Directory Page</title>
