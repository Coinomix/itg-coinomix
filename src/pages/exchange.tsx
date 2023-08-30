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
import { CardNewsType } from "../type/CardNewsType";

const ExchangePage = () => {
  return (
    <>
      <Header />

      <main className="main">
        <div className="main__header">
          <div className="main__breadcrumbs">
            <Link to="/" className="main__breadcrumbs-link">&lt; Home</Link>
          </div>
          <h1 className="main__title">Exchange</h1>
          <div></div>
        </div>

        <div className="main__categories">
          <div className="main__categories-container">
            <a href="#/" className="main__categories-link main__categories-active">Metamask</a>
            <a href="#/" className="main__categories-link">Binance</a>
            <a href="#/" className="main__categories-link">Swap</a>
            <a href="#/" className="main__categories-link">Web 3.0</a>
            <a href="#/" className="main__categories-link">Mining</a>
            <a href="#/" className="main__categories-link">Investments</a>
          </div>
        </div>

        <CardNews imgUrl="https://s3-alpha-sig.figma.com/img/61ca/f182/17ee3b5ad55033ad757c5b9f79dbf2c2?Expires=1693785600&Signature=Z-6~WgzoeA6rX-n7ZTZwqCUgjWTd3XgBXvVsBvrV1ADazJfkgIYXgLNZO8hu~hdG6TsrKMHtbasOtAG5VMd4LSaeZoOPAOZdS1VaCIdixzZsslftYaywqItQDpRNrLXWhgm4X6MvfqCw1Ie0kSV-HGFZgD5eRYbA6Ut-4VzBtjMUDEng7WaFDEY8YAnYQ8xwd5iBtcEDLZNq18GxHxTbEK6BeQEzytSt~~jB4ZhtQIeH9XK5Scnk~cEGnPdLmIZRyIjDi4Pm8Pz5zGKyGMrlM~wxFGxDwVQ2rGrhJXAMOVfabrocC9p9a7asGpScafuPjl8n5M4v9uo8p57mICPErA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />

        <Devider />

        <div className="main__container-latestnews">
          <div>
            <CardNews type={CardNewsType.top} imgUrl="https://s3-alpha-sig.figma.com/img/a71c/a942/b16b70fba3afc68be6a58b43276dbb2c?Expires=1693785600&Signature=Z3Crb2zXr55J~Y8skL9J1MaAn49LlqMDoRlep1zVyhY2HIFXj3clNt8Ej~ATgLTm9-MIZcAvSt~NHnGpqJyfLvtiS4m41EtG15GIx9Ltmqz59KW1w9A8Zanm2JCi6O191JslIlMpV6lpfYlZMZucYA9b5tb-vlheV2VkIJpKd2rT9rIjKIdHOE3L~Z8n4mFsnDRhf4kz4gbXYkZJCPr~O2LTzYrxAMVTIssWHhnmp32lpBPx7hPInYJo5se3E~upELjXXjnU04LJJOiH62pBOtvdtZ0o3ZTEUk7QzSP-zAE4537P4VKP6tt~hIE8aaVJGc9H9Um63YVNFbl9ZZ~t3g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
          </div>

          <div className="main__macroeconomics-container">
            <CardNewsSmall imgUrl="https://s3-alpha-sig.figma.com/img/9323/13ce/4391552b1fa0b009a57af6bc6d78e8de?Expires=1693785600&Signature=C4UQ1RKW2nr~bTHOZ1JNMWy6n6KZ-tK7zj-q1LZPkSOmh1F7zL85Sdfl0Ssv~toMgK7P3AW1DYxqzGDUOHI7FMnfw5vIEqjCxVM~mqQ9Zd9-0579SeSGZuhszSOzzxdQ5OwMGF02RYiHkBiwq2fe7KwyKgQQgMw1zNSalw91YZRvnAYlLVWvIr2c9~RgDvtb~nRNdByTTrwVmSAVY3RE5~8gLWWOJvCKH1t4C1DScE0qUwDqh5oZQmUnn4qYppCJZyWhze08LM67Bd~OFgIUkNPbRLYCW2DPXqJdKtcZFwbIpPBmwpaI9-SVtblIb0E3Cln7lKx4u3~y4YsbXhgu9w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"/>
            <CardNewsSmall imgUrl="https://s3-alpha-sig.figma.com/img/8d21/8fb2/c5827f333c402a5722bd1c3e6b5fb0f9?Expires=1693785600&Signature=TAYy1IlgxnYuSN7A7HTJa-4PxjxIbZoB7dcnG9JwmZBAMgryuROhqR1YQSeh6syfNT9JkmZWD0Z1epeK24xhGog1DpoZOkBWSm6wW9Be3pGhMFouRkhLd6PDjXyAC2J9cE937P-YGA4guK1Sk6GMkADU0adt-X7MyGvOokQ9p3qW-f6kAGQna~X0nW9bcfKPMSm96-LZEKjg9GytU9IJ3Nab3k5tpz-m53RHJNdxj6JjHkFZFiif1sUicfDzNZAcwE4CZcjija-f68RyN0iMNt8qMMos~-0ceI5FeCAHpo72m7Bhr4c5xWhoDCatbuxHPfysBH93gm1xHv8MbuA1kQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"/>
          </div>
        </div>   

        <div className="main__section">
            <h2 className="main__section-title">Best exchange</h2>
            <a href="/" className="main__section-readmore">Read more</a>
        </div>

        <div className="main__container-latestnews">
          <CardNewsSmall imgUrl="https://s3-alpha-sig.figma.com/img/461a/4ca8/8fa691feb0a84208fd3de3d50fb8309c?Expires=1694390400&Signature=k3iotjeOJhRfX0DeVYUrHdKYsvVUU2bGSZv-ozqfganHw~sUAL2CBdTRmDTLjM-dVhDA9BNUkfnTIHwfPsQOXGsFRpC-DpftxiXsdnDHRFPSk4CT3eRuRRlusd1QEHw8lXp7LEUoqNYjIhhkMHrOG5VGXoFBD9~Lu-pp1cJQBsjamGy-fubAD8RZG2mLK3Mhm2Gq1H6ut2nUQsjNJOBwxXTTtYvRMfIcSgiUKjQ8K5rrbJxZMmc0I7Y5jTpsViI58oGfxKb71gqLL5nuFvEKq9wxwEUjJiVa1NbW-ikekpoScU1pdjqH3QCQFu8ED3V3OJjPF2~B4VCuBymZcQYKcg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
          <CardNewsSmall imgUrl="https://s3-alpha-sig.figma.com/img/8b56/ccea/e7c9a646d6fd649146680491df030de7?Expires=1694390400&Signature=c7mQJF6R07kg-D73m-Fn1wmeb2Ok7AS~FYZgR4ENqa3ckiSIhshmtL5YkSa6Z9e7v1H2LcbmDq4JfrIqWvAZ4YcfcXJ-s7rqz2KAY2k1G5IAodSZ9EvI4pR6UXSgAmt~zuR1l3BpnK58-csSyNNwvdYtasDm~lAetI54z69rKiSmiFnmfmAWqljo2RuRh1cmFKOuthhSOkgHQcePUM4E67H-6l0-a8Yx7IXphztNUAobQXVwxc~0VW5VeZxkfnRw7KigSLr3spyDAaKsCep2Nwa~says5M1UF8kwgY1FtI46c0jji9fWJ~83aU3aorziNmv1U1iLX5n5BJ8WvJ3xYA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
          <CardNewsSmall />
        </div>

        <Devider />

        <CardNewsTop />

      <div className="main__section">
          <h2 className="main__section-title">Must to read</h2>
          <a href="#" className="main__section-readmore">Read more</a>
      </div>
      </main>

    <footer>
      <Footer />
    </footer>
    </>
  )
}

export default ExchangePage;

export const Head: HeadFC = () => <title>Exchange Page</title>
