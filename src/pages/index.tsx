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
        
        <Devider />
        
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

        {/* <Container fluid={true} className="">
          <Row>
            <Col sm={12} md={12} lg={4} className="">
              <CardNewsSmall imgUrl="https://s3-alpha-sig.figma.com/img/14a7/9c9b/51308c627efee3fe8348e7261421b20f?Expires=1693785600&Signature=XtnYgBeQp9pkP20U0N-lKIRqEmZm2~ovo5bz842irxUoUO2Z82GAkflpcoXESpzDmij4yBkWwOJe2dmcOY3xRu-0oA7mOO2pF~W~eidDGeOYWu8KUTHyYu1h0~Xg9pjiCah~~iuiCjwFdrH6s9gt99t89KC1OZifReUgvJ8WzsxdYvlSXazNBPDgiyTPihaQtdbeCiEnQMIfDk5gLyg8rjSs5Z20zpEM3cUM5ytWEfDyLyA8Gqt1GhS1y6hjBTLEYq-PlCC4PH1Fywt9cJ89YnCoKul9ApyNV-tqZzXMwQHh-GltkU09FvnSsTICA-Xy3GrL-994IHYMOPPbHvgL5A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
            </Col>
            <Col sm={12} md={12} lg={8} className="">
              <CardNewsSmall imgUrl="https://s3-alpha-sig.figma.com/img/87e7/24ec/71ec9aa635af1efb5ac0f82558490978?Expires=1693785600&Signature=fkBuRjw9qgZYkqgzluSNMjvVe7esXsqKMSP7K50xgHEMhJ2~g3p2qL30YJ8sDC3LvxBmtn9Msm-H~O~xpQOw1vwfUIB0Sd488Qj6rTiFIvdU4jrEZwJrIohGyADerjk43Xe6gCyT4GmSxzQrZk4mtJcBwzAMafoA60RjhA8RnOq01WJi9Yyio-RzYDaFVp9UKLyOoKD3OYGVC35cuQ1Ge8CyGvKh2WKoC10xnkZ5nBGMADmQ8dzvZ6hUeRGlp6rnWLT9AzPedRlR7Y2hCmQ~o3ZWcGbtrvQ5f8W7KvFoIyN~r~kk53nB9pWRXMyjze3KyLX3I-IevYmvNkyuujIcQA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
            </Col>
          </Row>
        </Container> */}

        {/* <Stack gap={3} direction="horizontal">
          <Row>
            <Col sm={12} md={12} lg={4} className="">
              <CardNewsSmall imgUrl="https://s3-alpha-sig.figma.com/img/14a7/9c9b/51308c627efee3fe8348e7261421b20f?Expires=1693785600&Signature=XtnYgBeQp9pkP20U0N-lKIRqEmZm2~ovo5bz842irxUoUO2Z82GAkflpcoXESpzDmij4yBkWwOJe2dmcOY3xRu-0oA7mOO2pF~W~eidDGeOYWu8KUTHyYu1h0~Xg9pjiCah~~iuiCjwFdrH6s9gt99t89KC1OZifReUgvJ8WzsxdYvlSXazNBPDgiyTPihaQtdbeCiEnQMIfDk5gLyg8rjSs5Z20zpEM3cUM5ytWEfDyLyA8Gqt1GhS1y6hjBTLEYq-PlCC4PH1Fywt9cJ89YnCoKul9ApyNV-tqZzXMwQHh-GltkU09FvnSsTICA-Xy3GrL-994IHYMOPPbHvgL5A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
            </Col>
            <Col sm={12} md={12} lg={8} className="">
              <CardNewsSmall imgUrl="https://s3-alpha-sig.figma.com/img/87e7/24ec/71ec9aa635af1efb5ac0f82558490978?Expires=1693785600&Signature=fkBuRjw9qgZYkqgzluSNMjvVe7esXsqKMSP7K50xgHEMhJ2~g3p2qL30YJ8sDC3LvxBmtn9Msm-H~O~xpQOw1vwfUIB0Sd488Qj6rTiFIvdU4jrEZwJrIohGyADerjk43Xe6gCyT4GmSxzQrZk4mtJcBwzAMafoA60RjhA8RnOq01WJi9Yyio-RzYDaFVp9UKLyOoKD3OYGVC35cuQ1Ge8CyGvKh2WKoC10xnkZ5nBGMADmQ8dzvZ6hUeRGlp6rnWLT9AzPedRlR7Y2hCmQ~o3ZWcGbtrvQ5f8W7KvFoIyN~r~kk53nB9pWRXMyjze3KyLX3I-IevYmvNkyuujIcQA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
            </Col>
          </Row>
        </Stack> */}

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
      </main>

    <footer>
      <Footer />
    </footer>
    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page | Coinomix</title>
