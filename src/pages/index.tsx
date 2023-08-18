import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import "../assets/styles/scss/main.scss"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
    <header>
      <Header />
    </header>

      <main>
        <h1>
          Congratulations
          <br />
          <span>— you just made a Gatsby site! 🎉🎉🎉</span>
        </h1>
        <p>
          Edit <code>src/pages/index.tsx</code> to see this page
          update in real-time. 😎
        </p>
      </main>

    <footer>
      <Footer />
    </footer>
    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
