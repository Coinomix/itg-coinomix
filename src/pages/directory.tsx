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
import { Grid } from "@mui/material";

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
          <CardNewsSmall imgUrl="https://s3-alpha-sig.figma.com/img/80d0/b769/e5a8e0aa812a3d77a681355fa99a4a3e?Expires=1693785600&Signature=Z5mKEqV5QRwMR6YvcFFGkLJ9YawtN2I3c1xk1Ct652CM-cStqPYpDvr000pKMrpqAZRbsDWxrXrhHayu6OM5-2lS4VidE7GFd1E3mvEHsm2m24vAsFedV5gUcXGNb2kEN5F6OfYtjX~fFYAIcR0myKdCmM84tn8idFlzBFwsQ7t32-KGtmdlq1Ep~yyMUEUQ5BxQSWG1o6K6sJmCl2LJk4ubxraGfkT-QuqhqxAtwUAKsWAQQr-DtsJlYU29g~4B64LmevPCJFLyLoOCVuOo0nYWG3fBycRexCw6afR82ycRN9weFqogU0NAurQfApt0oC1fq4tOgjUHQ7-WfbJ24g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
          <CardNewsSmall imgUrl="https://s3-alpha-sig.figma.com/img/f68d/8c6e/5b41a13157af6851a6f794f9c7dbb152?Expires=1693785600&Signature=NwPhiFP~y4JQ4i9Hy8E1Y~YCquGrheze3BerIBBS09rZB~mmuDtBIL6wBLTZrAOa9WEKbLII1QU7uzJsVNyqeErBPTEz4FpF5SLSfXhc5evOB0g9UdUh8NpxrCn~4QTJZ6vSkLTRGbGccYzowvvpqztJK6Fawy3KqEIrKEbRK7W19-KfaTYHYURyCZIYstIn8LCibEj81l-ZhSb9QywyZobADv2VYGqMprB4oDRzt1h5QlyZnNmRny-y-7XjzgGnT8L7M8UeCfdZS73LLw9yJLyhZd7queMfVfbTdfXeFdmljjSOV2XWAIUnkl-iJ-cpshEt6VlI2V85nRbTtaK9yA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
          <CardNewsSmall imgUrl="https://s3-alpha-sig.figma.com/img/14a7/9c9b/51308c627efee3fe8348e7261421b20f?Expires=1693785600&Signature=XtnYgBeQp9pkP20U0N-lKIRqEmZm2~ovo5bz842irxUoUO2Z82GAkflpcoXESpzDmij4yBkWwOJe2dmcOY3xRu-0oA7mOO2pF~W~eidDGeOYWu8KUTHyYu1h0~Xg9pjiCah~~iuiCjwFdrH6s9gt99t89KC1OZifReUgvJ8WzsxdYvlSXazNBPDgiyTPihaQtdbeCiEnQMIfDk5gLyg8rjSs5Z20zpEM3cUM5ytWEfDyLyA8Gqt1GhS1y6hjBTLEYq-PlCC4PH1Fywt9cJ89YnCoKul9ApyNV-tqZzXMwQHh-GltkU09FvnSsTICA-Xy3GrL-994IHYMOPPbHvgL5A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
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
            <CardNewsSmall imgUrl="https://s3-alpha-sig.figma.com/img/8d21/8fb2/c5827f333c402a5722bd1c3e6b5fb0f9?Expires=1693785600&Signature=TAYy1IlgxnYuSN7A7HTJa-4PxjxIbZoB7dcnG9JwmZBAMgryuROhqR1YQSeh6syfNT9JkmZWD0Z1epeK24xhGog1DpoZOkBWSm6wW9Be3pGhMFouRkhLd6PDjXyAC2J9cE937P-YGA4guK1Sk6GMkADU0adt-X7MyGvOokQ9p3qW-f6kAGQna~X0nW9bcfKPMSm96-LZEKjg9GytU9IJ3Nab3k5tpz-m53RHJNdxj6JjHkFZFiif1sUicfDzNZAcwE4CZcjija-f68RyN0iMNt8qMMos~-0ceI5FeCAHpo72m7Bhr4c5xWhoDCatbuxHPfysBH93gm1xHv8MbuA1kQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"/>
            <CardNewsSmall imgUrl="https://s3-alpha-sig.figma.com/img/9323/13ce/4391552b1fa0b009a57af6bc6d78e8de?Expires=1693785600&Signature=C4UQ1RKW2nr~bTHOZ1JNMWy6n6KZ-tK7zj-q1LZPkSOmh1F7zL85Sdfl0Ssv~toMgK7P3AW1DYxqzGDUOHI7FMnfw5vIEqjCxVM~mqQ9Zd9-0579SeSGZuhszSOzzxdQ5OwMGF02RYiHkBiwq2fe7KwyKgQQgMw1zNSalw91YZRvnAYlLVWvIr2c9~RgDvtb~nRNdByTTrwVmSAVY3RE5~8gLWWOJvCKH1t4C1DScE0qUwDqh5oZQmUnn4qYppCJZyWhze08LM67Bd~OFgIUkNPbRLYCW2DPXqJdKtcZFwbIpPBmwpaI9-SVtblIb0E3Cln7lKx4u3~y4YsbXhgu9w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"/>
          </div>

          <div>
            <CardNews type={CardNewsType.top} imgUrl="https://s3-alpha-sig.figma.com/img/8b56/ccea/e7c9a646d6fd649146680491df030de7?Expires=1694390400&Signature=c7mQJF6R07kg-D73m-Fn1wmeb2Ok7AS~FYZgR4ENqa3ckiSIhshmtL5YkSa6Z9e7v1H2LcbmDq4JfrIqWvAZ4YcfcXJ-s7rqz2KAY2k1G5IAodSZ9EvI4pR6UXSgAmt~zuR1l3BpnK58-csSyNNwvdYtasDm~lAetI54z69rKiSmiFnmfmAWqljo2RuRh1cmFKOuthhSOkgHQcePUM4E67H-6l0-a8Yx7IXphztNUAobQXVwxc~0VW5VeZxkfnRw7KigSLr3spyDAaKsCep2Nwa~says5M1UF8kwgY1FtI46c0jji9fWJ~83aU3aorziNmv1U1iLX5n5BJ8WvJ3xYA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
          </div>
        </div>

        <Devider />

        <CardNews imgUrl="https://s3-alpha-sig.figma.com/img/61ca/f182/17ee3b5ad55033ad757c5b9f79dbf2c2?Expires=1693785600&Signature=Z-6~WgzoeA6rX-n7ZTZwqCUgjWTd3XgBXvVsBvrV1ADazJfkgIYXgLNZO8hu~hdG6TsrKMHtbasOtAG5VMd4LSaeZoOPAOZdS1VaCIdixzZsslftYaywqItQDpRNrLXWhgm4X6MvfqCw1Ie0kSV-HGFZgD5eRYbA6Ut-4VzBtjMUDEng7WaFDEY8YAnYQ8xwd5iBtcEDLZNq18GxHxTbEK6BeQEzytSt~~jB4ZhtQIeH9XK5Scnk~cEGnPdLmIZRyIjDi4Pm8Pz5zGKyGMrlM~wxFGxDwVQ2rGrhJXAMOVfabrocC9p9a7asGpScafuPjl8n5M4v9uo8p57mICPErA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />       
      </main>

    <footer>
      <Footer />
    </footer>
    </>
  )
}

export default DirectoryPage;

export const Head: HeadFC = () => <title>Directory Page</title>
