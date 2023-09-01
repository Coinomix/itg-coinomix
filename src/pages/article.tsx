import * as React from "react";
import { Link, type HeadFC } from "gatsby";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import "../assets/styles/scss/index.scss";
import { Devider } from "../components/Devider";
import { CardBanner } from "../components/CardBanner";
import { CardNews } from "../components/CardNews";
import { CardNewsType } from "../types/enums";
import { PageTitle } from "../components/PageTitle";

const ArticlePage = () => {
  return (
    <>
      <Header />

      <main className="main">
        <article className="article">
          <PageTitle 
            title="Bitcoin offshore and the end of mining: how the world of cryptocurrencies is changing in 2023"
            breadcrumbsTitle="Digital"
            breadcrumbsUrl="digital"
          />

          <Devider />

          <CardBanner height="618px" imgUrl="https://s3-alpha-sig.figma.com/img/a71c/a942/b16b70fba3afc68be6a58b43276dbb2c?Expires=1693785600&Signature=Z3Crb2zXr55J~Y8skL9J1MaAn49LlqMDoRlep1zVyhY2HIFXj3clNt8Ej~ATgLTm9-MIZcAvSt~NHnGpqJyfLvtiS4m41EtG15GIx9Ltmqz59KW1w9A8Zanm2JCi6O191JslIlMpV6lpfYlZMZucYA9b5tb-vlheV2VkIJpKd2rT9rIjKIdHOE3L~Z8n4mFsnDRhf4kz4gbXYkZJCPr~O2LTzYrxAMVTIssWHhnmp32lpBPx7hPInYJo5se3E~upELjXXjnU04LJJOiH62pBOtvdtZ0o3ZTEUk7QzSP-zAE4537P4VKP6tt~hIE8aaVJGc9H9Um63YVNFbl9ZZ~t3g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"/>

          <div className="article__content">
            <p className="article__content-text">
              Lorem ipsum dolor sit amet consectetur. Tortor posuere tempus turpis quisque adipiscing faucibus sem vulputate magna. Turpis nisl lectus ipsum tortor sit convallis egestas nullam tristique. Lacus facilisis risus.
            </p>
            <p className="article__content-text">
              Lorem ipsum dolor sit amet consectetur. Suspendisse rhoncus nulla integer nunc convallis facilisis magnis sit eu. Velit montes lorem varius ut sollicitudin faucibus nec rhoncus.  Et elementum dignissim erat facilisis consequat ultrices diam. Amet vitae posuere urna cursus varius rhoncus...
            </p>

            <div className="article__subscribe">
              <div className="article__subscribe-text">
                If you want to get acquainted with exclusive news from Coinomix
                <br/>
                please, purchase a subscription
              </div>
              <div  className="article__subscribe-button">
                <button>Subscribe</button>
              </div>
            </div>
          </div>
        </article>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  )
};

export default ArticlePage;

export const Head: HeadFC = () => <title>Article Page</title>
