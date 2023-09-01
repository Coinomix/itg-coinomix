import * as React from "react";
import { Link, type HeadFC } from "gatsby";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import "../assets/styles/scss/index.scss";
import { Devider } from "../components/Devider";
import { CardBanner } from "../components/CardBanner";
import { PageTitle } from "../components/PageTitle";

const AboutPage = () => {
  return (
    <>
      <Header />

      <main className="main">
        <PageTitle 
            title="About us"
            breadcrumbsTitle="Home"
        />

          <Devider />

          <CardBanner height="406px" imgUrl="https://s3-alpha-sig.figma.com/img/8b56/ccea/e7c9a646d6fd649146680491df030de7?Expires=1694390400&Signature=c7mQJF6R07kg-D73m-Fn1wmeb2Ok7AS~FYZgR4ENqa3ckiSIhshmtL5YkSa6Z9e7v1H2LcbmDq4JfrIqWvAZ4YcfcXJ-s7rqz2KAY2k1G5IAodSZ9EvI4pR6UXSgAmt~zuR1l3BpnK58-csSyNNwvdYtasDm~lAetI54z69rKiSmiFnmfmAWqljo2RuRh1cmFKOuthhSOkgHQcePUM4E67H-6l0-a8Yx7IXphztNUAobQXVwxc~0VW5VeZxkfnRw7KigSLr3spyDAaKsCep2Nwa~says5M1UF8kwgY1FtI46c0jji9fWJ~83aU3aorziNmv1U1iLX5n5BJ8WvJ3xYA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"/>

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
