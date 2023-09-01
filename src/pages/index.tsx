import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import "../assets/styles/scss/index.scss";
import { CardNews } from "../components/CardNews";
import { CryptoString } from "../components/CryptoString";
import { LatestNews } from "../components/LatestNews";
import { CardNewsTop } from "../components/CardNewsTop";
import { CardNewsSmall } from "../components/CardNewsSmall";
import { CardBanner } from "../components/CardBanner";
import { Devider } from "../components/Devider";
import { CardNewsType } from "../types/enums";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Header />

      <main className="main">
        
        <Devider />
        
        <div className="main__container-latestnews">
          <div>
            <CardNews type={CardNewsType.top} imgUrl="https://s3-alpha-sig.figma.com/img/a71c/a942/b16b70fba3afc68be6a58b43276dbb2c?Expires=1693785600&Signature=Z3Crb2zXr55J~Y8skL9J1MaAn49LlqMDoRlep1zVyhY2HIFXj3clNt8Ej~ATgLTm9-MIZcAvSt~NHnGpqJyfLvtiS4m41EtG15GIx9Ltmqz59KW1w9A8Zanm2JCi6O191JslIlMpV6lpfYlZMZucYA9b5tb-vlheV2VkIJpKd2rT9rIjKIdHOE3L~Z8n4mFsnDRhf4kz4gbXYkZJCPr~O2LTzYrxAMVTIssWHhnmp32lpBPx7hPInYJo5se3E~upELjXXjnU04LJJOiH62pBOtvdtZ0o3ZTEUk7QzSP-zAE4537P4VKP6tt~hIE8aaVJGc9H9Um63YVNFbl9ZZ~t3g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
          </div>

          <LatestNews />
        </div>

        <CryptoString />

        <CardBanner imgUrl="https://s3-alpha-sig.figma.com/img/d64d/b394/0e2297d578c318fe43e421305ae40a5d?Expires=1694390400&Signature=cYcqHjFTsvKnRJ~SSb8ILj4cQIq3g4ILYXN2AJSs-u5rig0g6zfuwhClnaROQ1-7QDLhxPcV7h8yHX9mxiSy0gmYm3ahE1YTwX~YqcVCzzM6HuaX0vWrNXINS01lhLwcLjp8MHEVEY~yLeHmaij7sDknHeFvqG7TiEOwU4gtLQ3GFtj1bUhfWFYazhIAmDsBCbp7iqA1Yn3K~1tcw0-WNpMoRGjdf3hq-JmTIWpPzrXb6bhYLcUhtskIN40phheL3xNGf2j1h16BLT0gmYGWR53vETNsCOUPfxqO2h1nqJ3Fil9bm21DOREOqkx0Rq0TX6a5LLYHqrfgLCQBIMX4sQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />

        <div className="main__section">
            <h2 className="main__section-title">Cryptocurrency</h2>
            <a href="/" className="main__section-readmore">Read more</a>
        </div>

        <div className="main__container-latestnews">
          <CardNewsSmall imgUrl="http://s3-alpha-sig.figma.com/img/461a/4ca8/8fa691feb0a84208fd3de3d50fb8309c?Expires=1693785600&Signature=IBTzNhz~WDmgy2i-zhMhSR4clnd9vIpjBDxEbPD~ceR7g~RoXLbgQzPPUuHozmq-vBEelVmqx0Sf~21EpHnGpKMX0WiXtTnNDSRfL6mIEiQZOXZPuh5LY2ZukbTUeSrd2F5VfkW-0SG4PwQH5zhEolqdMR2Q1xSDDyZqc6QqxwyyVx0Nn6RabQvrOjOSpQ7eUbfnxkbcvCynWHqUT7gHKT3OT6mk3MSqp8i11NEHACdwA7YsHeVBd47-g4-ub77CXSBYwaLfJhmcwiEweWTJXvuG0X7ASbIoHrRMsOXqtZ3eUQlLvQJ3gd3AmSeRBQ3UwGZSYYh7fhe8ozntJkY~BA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
          <CardNewsSmall imgUrl="https://s3-alpha-sig.figma.com/img/8b56/ccea/e7c9a646d6fd649146680491df030de7?Expires=1693785600&Signature=bgOrLGk1Ald~3EkhJN~1cz7HEOJ5Kq1iX~WHN1wFKClrM1zxrZb7yC4EqEW1vXueOLfTvay5ZBA~fa8yJr4fZj0BWv5VSOOT2oPRms72NTYmbsYNqre~vAJb09~V~QKXixu6yO0TE8jWn1OLt-IhoQiysMAflTdrSgKm6V6riZNW1nyF-VIrU4Mtcoc0h5W2EKg1Cs9C583RzH7duhQNITw8e-B78XpVrTU3rAiLixHER5QLlxPhbi-uD12aCHmxuoRQWt3y9vcKtinF3t04nzfYnajBxO2gD~bJ7cgmVM3rbGYktWc~QNKWMpqeVK457mCHyAHRE6NaSfsPU8h9QA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
          <CardNewsSmall />
        </div>

        <Devider />

        <CardNewsTop />

        <Devider />

        <CardNews imgUrl="https://s3-alpha-sig.figma.com/img/61ca/f182/17ee3b5ad55033ad757c5b9f79dbf2c2?Expires=1693785600&Signature=Z-6~WgzoeA6rX-n7ZTZwqCUgjWTd3XgBXvVsBvrV1ADazJfkgIYXgLNZO8hu~hdG6TsrKMHtbasOtAG5VMd4LSaeZoOPAOZdS1VaCIdixzZsslftYaywqItQDpRNrLXWhgm4X6MvfqCw1Ie0kSV-HGFZgD5eRYbA6Ut-4VzBtjMUDEng7WaFDEY8YAnYQ8xwd5iBtcEDLZNq18GxHxTbEK6BeQEzytSt~~jB4ZhtQIeH9XK5Scnk~cEGnPdLmIZRyIjDi4Pm8Pz5zGKyGMrlM~wxFGxDwVQ2rGrhJXAMOVfabrocC9p9a7asGpScafuPjl8n5M4v9uo8p57mICPErA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />

        <div className="main__section">
            <h2 className="main__section-title">Macroeconomics</h2>
            <a href="/" className="main__section-readmore">Read more</a>
        </div>

        <div className="main__macroeconomics">
          <div className="main__macroeconomics-container">
            <CardNews type={CardNewsType.block} imgUrl="https://s3-alpha-sig.figma.com/img/61ca/f182/17ee3b5ad55033ad757c5b9f79dbf2c2?Expires=1693785600&Signature=Z-6~WgzoeA6rX-n7ZTZwqCUgjWTd3XgBXvVsBvrV1ADazJfkgIYXgLNZO8hu~hdG6TsrKMHtbasOtAG5VMd4LSaeZoOPAOZdS1VaCIdixzZsslftYaywqItQDpRNrLXWhgm4X6MvfqCw1Ie0kSV-HGFZgD5eRYbA6Ut-4VzBtjMUDEng7WaFDEY8YAnYQ8xwd5iBtcEDLZNq18GxHxTbEK6BeQEzytSt~~jB4ZhtQIeH9XK5Scnk~cEGnPdLmIZRyIjDi4Pm8Pz5zGKyGMrlM~wxFGxDwVQ2rGrhJXAMOVfabrocC9p9a7asGpScafuPjl8n5M4v9uo8p57mICPErA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
            <CardNews type={CardNewsType.block} />
          </div>
          <div className="main__macroeconomics-container">
            <CardNewsSmall imgUrl="https://s3-alpha-sig.figma.com/img/8d21/8fb2/c5827f333c402a5722bd1c3e6b5fb0f9?Expires=1693785600&Signature=TAYy1IlgxnYuSN7A7HTJa-4PxjxIbZoB7dcnG9JwmZBAMgryuROhqR1YQSeh6syfNT9JkmZWD0Z1epeK24xhGog1DpoZOkBWSm6wW9Be3pGhMFouRkhLd6PDjXyAC2J9cE937P-YGA4guK1Sk6GMkADU0adt-X7MyGvOokQ9p3qW-f6kAGQna~X0nW9bcfKPMSm96-LZEKjg9GytU9IJ3Nab3k5tpz-m53RHJNdxj6JjHkFZFiif1sUicfDzNZAcwE4CZcjija-f68RyN0iMNt8qMMos~-0ceI5FeCAHpo72m7Bhr4c5xWhoDCatbuxHPfysBH93gm1xHv8MbuA1kQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"/>
            <CardNewsSmall imgUrl="https://s3-alpha-sig.figma.com/img/9323/13ce/4391552b1fa0b009a57af6bc6d78e8de?Expires=1693785600&Signature=C4UQ1RKW2nr~bTHOZ1JNMWy6n6KZ-tK7zj-q1LZPkSOmh1F7zL85Sdfl0Ssv~toMgK7P3AW1DYxqzGDUOHI7FMnfw5vIEqjCxVM~mqQ9Zd9-0579SeSGZuhszSOzzxdQ5OwMGF02RYiHkBiwq2fe7KwyKgQQgMw1zNSalw91YZRvnAYlLVWvIr2c9~RgDvtb~nRNdByTTrwVmSAVY3RE5~8gLWWOJvCKH1t4C1DScE0qUwDqh5oZQmUnn4qYppCJZyWhze08LM67Bd~OFgIUkNPbRLYCW2DPXqJdKtcZFwbIpPBmwpaI9-SVtblIb0E3Cln7lKx4u3~y4YsbXhgu9w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"/>
            <CardNewsSmall imgUrl="https://s3-alpha-sig.figma.com/img/e739/7006/ce42d070ef9013f49667d8519ff012fd?Expires=1693785600&Signature=lBwgYVnkDsbITefmCxjqRi0ajCFV01V3t-bkGhocaE-acQtdBBqfOasfomVq6IKkVslfj~B6rp5ZNbJQmdsz-xpEX84hgm9UgHd-6shX55Get1C1ZdwDWrl40VT~zq2VFl13~DCRdvKXSSm0~jLgliU4UKFc0VRtUL5Wo20qz00Reicojeby3F-vVfYPfkTK9OpJCg~qhz-TYOj5aVvvwvBkKYpFUckAcOI-jnhUJv5M4~iz8UxbikkdvkkS8uhNaxLtkkfjJK7uQk6-4FEThDrjDhJ0nrrue7DJz7NPbHIlmkqYywIWouIZsPRm6d5Wsyha2pSBeeR23natTM74dw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"/>
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
          <CardNewsSmall imgUrl="https://s3-alpha-sig.figma.com/img/80d0/b769/e5a8e0aa812a3d77a681355fa99a4a3e?Expires=1693785600&Signature=Z5mKEqV5QRwMR6YvcFFGkLJ9YawtN2I3c1xk1Ct652CM-cStqPYpDvr000pKMrpqAZRbsDWxrXrhHayu6OM5-2lS4VidE7GFd1E3mvEHsm2m24vAsFedV5gUcXGNb2kEN5F6OfYtjX~fFYAIcR0myKdCmM84tn8idFlzBFwsQ7t32-KGtmdlq1Ep~yyMUEUQ5BxQSWG1o6K6sJmCl2LJk4ubxraGfkT-QuqhqxAtwUAKsWAQQr-DtsJlYU29g~4B64LmevPCJFLyLoOCVuOo0nYWG3fBycRexCw6afR82ycRN9weFqogU0NAurQfApt0oC1fq4tOgjUHQ7-WfbJ24g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
          <CardNewsSmall imgUrl="https://s3-alpha-sig.figma.com/img/f68d/8c6e/5b41a13157af6851a6f794f9c7dbb152?Expires=1693785600&Signature=NwPhiFP~y4JQ4i9Hy8E1Y~YCquGrheze3BerIBBS09rZB~mmuDtBIL6wBLTZrAOa9WEKbLII1QU7uzJsVNyqeErBPTEz4FpF5SLSfXhc5evOB0g9UdUh8NpxrCn~4QTJZ6vSkLTRGbGccYzowvvpqztJK6Fawy3KqEIrKEbRK7W19-KfaTYHYURyCZIYstIn8LCibEj81l-ZhSb9QywyZobADv2VYGqMprB4oDRzt1h5QlyZnNmRny-y-7XjzgGnT8L7M8UeCfdZS73LLw9yJLyhZd7queMfVfbTdfXeFdmljjSOV2XWAIUnkl-iJ-cpshEt6VlI2V85nRbTtaK9yA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
          <CardNewsSmall imgUrl="https://s3-alpha-sig.figma.com/img/14a7/9c9b/51308c627efee3fe8348e7261421b20f?Expires=1693785600&Signature=XtnYgBeQp9pkP20U0N-lKIRqEmZm2~ovo5bz842irxUoUO2Z82GAkflpcoXESpzDmij4yBkWwOJe2dmcOY3xRu-0oA7mOO2pF~W~eidDGeOYWu8KUTHyYu1h0~Xg9pjiCah~~iuiCjwFdrH6s9gt99t89KC1OZifReUgvJ8WzsxdYvlSXazNBPDgiyTPihaQtdbeCiEnQMIfDk5gLyg8rjSs5Z20zpEM3cUM5ytWEfDyLyA8Gqt1GhS1y6hjBTLEYq-PlCC4PH1Fywt9cJ89YnCoKul9ApyNV-tqZzXMwQHh-GltkU09FvnSsTICA-Xy3GrL-994IHYMOPPbHvgL5A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
        </div>          

        <CryptoString />

        <CardBanner />
      </main>

    <footer>
      <Footer />
    </footer>
    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
