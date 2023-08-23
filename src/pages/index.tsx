import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import "../assets/styles/scss/index.scss"
import { CardNews } from "../components/CardNews"
import { CryptoString } from "../components/CryptoString"
import { LatestNews } from "../components/LatestNews"
import { CardNewsTop } from "../components/CardNewsTop"
import { CardNewsSmall } from "../components/CardNewsSmall"
import { CardBanner } from "../components/CardBanner"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Header />

      <div className="main__devider"></div>

      <main className="main">
        <div className="main__container-latestnews">
          <CardNews isTop imgUrl="https://s3-alpha-sig.figma.com/img/a71c/a942/b16b70fba3afc68be6a58b43276dbb2c?Expires=1693785600&Signature=Z3Crb2zXr55J~Y8skL9J1MaAn49LlqMDoRlep1zVyhY2HIFXj3clNt8Ej~ATgLTm9-MIZcAvSt~NHnGpqJyfLvtiS4m41EtG15GIx9Ltmqz59KW1w9A8Zanm2JCi6O191JslIlMpV6lpfYlZMZucYA9b5tb-vlheV2VkIJpKd2rT9rIjKIdHOE3L~Z8n4mFsnDRhf4kz4gbXYkZJCPr~O2LTzYrxAMVTIssWHhnmp32lpBPx7hPInYJo5se3E~upELjXXjnU04LJJOiH62pBOtvdtZ0o3ZTEUk7QzSP-zAE4537P4VKP6tt~hIE8aaVJGc9H9Um63YVNFbl9ZZ~t3g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
          <LatestNews />
        </div>

        <CryptoString />

        <CardBanner />

        <section className="main__section">
            <h2 className="main__section-title">Cryptocurrency</h2>
            <a href="/" className="main__section-readmore">Read More</a>
        </section>

        <div className="main__container-latestnews">
          <CardNewsSmall imgUrl="http://s3-alpha-sig.figma.com/img/461a/4ca8/8fa691feb0a84208fd3de3d50fb8309c?Expires=1693785600&Signature=IBTzNhz~WDmgy2i-zhMhSR4clnd9vIpjBDxEbPD~ceR7g~RoXLbgQzPPUuHozmq-vBEelVmqx0Sf~21EpHnGpKMX0WiXtTnNDSRfL6mIEiQZOXZPuh5LY2ZukbTUeSrd2F5VfkW-0SG4PwQH5zhEolqdMR2Q1xSDDyZqc6QqxwyyVx0Nn6RabQvrOjOSpQ7eUbfnxkbcvCynWHqUT7gHKT3OT6mk3MSqp8i11NEHACdwA7YsHeVBd47-g4-ub77CXSBYwaLfJhmcwiEweWTJXvuG0X7ASbIoHrRMsOXqtZ3eUQlLvQJ3gd3AmSeRBQ3UwGZSYYh7fhe8ozntJkY~BA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
          <CardNewsSmall imgUrl="https://s3-alpha-sig.figma.com/img/8b56/ccea/e7c9a646d6fd649146680491df030de7?Expires=1693785600&Signature=bgOrLGk1Ald~3EkhJN~1cz7HEOJ5Kq1iX~WHN1wFKClrM1zxrZb7yC4EqEW1vXueOLfTvay5ZBA~fa8yJr4fZj0BWv5VSOOT2oPRms72NTYmbsYNqre~vAJb09~V~QKXixu6yO0TE8jWn1OLt-IhoQiysMAflTdrSgKm6V6riZNW1nyF-VIrU4Mtcoc0h5W2EKg1Cs9C583RzH7duhQNITw8e-B78XpVrTU3rAiLixHER5QLlxPhbi-uD12aCHmxuoRQWt3y9vcKtinF3t04nzfYnajBxO2gD~bJ7cgmVM3rbGYktWc~QNKWMpqeVK457mCHyAHRE6NaSfsPU8h9QA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
          <CardNewsSmall />
        </div>

        <div className="main__devider"></div>

        <CardNewsTop />

        <div className="main__devider"></div>

        <CardNews imgUrl="https://s3-alpha-sig.figma.com/img/61ca/f182/17ee3b5ad55033ad757c5b9f79dbf2c2?Expires=1693785600&Signature=Z-6~WgzoeA6rX-n7ZTZwqCUgjWTd3XgBXvVsBvrV1ADazJfkgIYXgLNZO8hu~hdG6TsrKMHtbasOtAG5VMd4LSaeZoOPAOZdS1VaCIdixzZsslftYaywqItQDpRNrLXWhgm4X6MvfqCw1Ie0kSV-HGFZgD5eRYbA6Ut-4VzBtjMUDEng7WaFDEY8YAnYQ8xwd5iBtcEDLZNq18GxHxTbEK6BeQEzytSt~~jB4ZhtQIeH9XK5Scnk~cEGnPdLmIZRyIjDi4Pm8Pz5zGKyGMrlM~wxFGxDwVQ2rGrhJXAMOVfabrocC9p9a7asGpScafuPjl8n5M4v9uo8p57mICPErA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />

        <section className="main__section">
            <h2 className="main__section-title">Macroeconomics</h2>
            <a href="/" className="main__section-readmore">Read More</a>
        </section>

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
