import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import "../assets/styles/scss/index.scss"
import { CardNews } from "../components/CardNews"
import { CryptoString } from "../components/CryptoString"
import { LatestNews } from "../components/LatestNews"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Header />

      <main className="main">
        <LatestNews />

        <CryptoString />

        <CardNews />

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
