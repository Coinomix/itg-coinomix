import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import "../assets/styles/scss/index.scss"
import { CardNews } from "../components/CardNews"
import { CryptoString } from "../components/CryptoString"
import { LatestNews } from "../components/LatestNews"
import { CardTags } from "../components/CardTags/CardTags"
import { CardNewsTop } from "../components/CardNewsTop"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Header />

      <main className="main">
        <div className="main__container-latestnews">
          <CardNews />
          <LatestNews />
        </div>

        <CryptoString />

        <CardNews />

        <div className="main__section">
            <h2 className="main__section-title">Cryptocurrency</h2>
            <a href="/" className="main__section-readmore">Read More</a>
        </div>

        <div className="main__container-latestnews">
          <CardTags bgImageUrl="http://s3-alpha-sig.figma.com/img/461a/4ca8/8fa691feb0a84208fd3de3d50fb8309c?Expires=1693785600&Signature=IBTzNhz~WDmgy2i-zhMhSR4clnd9vIpjBDxEbPD~ceR7g~RoXLbgQzPPUuHozmq-vBEelVmqx0Sf~21EpHnGpKMX0WiXtTnNDSRfL6mIEiQZOXZPuh5LY2ZukbTUeSrd2F5VfkW-0SG4PwQH5zhEolqdMR2Q1xSDDyZqc6QqxwyyVx0Nn6RabQvrOjOSpQ7eUbfnxkbcvCynWHqUT7gHKT3OT6mk3MSqp8i11NEHACdwA7YsHeVBd47-g4-ub77CXSBYwaLfJhmcwiEweWTJXvuG0X7ASbIoHrRMsOXqtZ3eUQlLvQJ3gd3AmSeRBQ3UwGZSYYh7fhe8ozntJkY~BA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
          <CardTags bgImageUrl="https://s3-alpha-sig.figma.com/img/8b56/ccea/e7c9a646d6fd649146680491df030de7?Expires=1693785600&Signature=bgOrLGk1Ald~3EkhJN~1cz7HEOJ5Kq1iX~WHN1wFKClrM1zxrZb7yC4EqEW1vXueOLfTvay5ZBA~fa8yJr4fZj0BWv5VSOOT2oPRms72NTYmbsYNqre~vAJb09~V~QKXixu6yO0TE8jWn1OLt-IhoQiysMAflTdrSgKm6V6riZNW1nyF-VIrU4Mtcoc0h5W2EKg1Cs9C583RzH7duhQNITw8e-B78XpVrTU3rAiLixHER5QLlxPhbi-uD12aCHmxuoRQWt3y9vcKtinF3t04nzfYnajBxO2gD~bJ7cgmVM3rbGYktWc~QNKWMpqeVK457mCHyAHRE6NaSfsPU8h9QA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
          <CardTags bgImageUrl="https://s3-alpha-sig.figma.com/img/e348/15ec/6d73fc0b2b6ccf273983b85521c605fa?Expires=1693785600&Signature=jIosHWrpENcE0A3qlAVTLHjlP7m0xE-FaibNzEN5twwZY5IEiFukaaYSr5S5QN4sPlp1o4oMibFERF4dmJ4hv4FL1CspzQgxpRf58fmauvzB6cwzpX-tciqFn~qEbqGMfIUSqNL6ClZGn3P-m1BJn~tm8RqI6vS6UEaHNQmaLFNBZKK41GXvoVmYMo5dRq2kOOeIYdTgJD5ghzCtcFas8FJ3qG6L~wfyPaakZRF9mygFbsuQVjO2EIpMTxijT892BHSIGUZDGhT05JeSV-DliRzTb~-5wmVNc-6PC~-IFj-StRLF6yWtd6~Y-CacutMq8YKco-YudMqxPJi8PeVd8Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"/>
        </div>

        <div className="main__devider"></div>
        <CardNewsTop />

        <CryptoString />

        <CardNews />
      </main>

    <footer>
      <Footer />
    </footer>
    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
