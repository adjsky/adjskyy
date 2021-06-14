import React from "react"
import Head from "next/head"
import { withRouter } from "next/router"
import LanguageContext from "../contexts/LanguageContext.jsx"
import PageInfo from "../components/PageInfo/PageInfo.jsx"
import PageFooter from "../components/PageFooter/PageFooter.jsx"
import "./global.css"

class MyApp extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      lang: "en",
    }
  }

  render() {
    const { Component, pageProps } = this.props
    const { lang } = this.state

    return (
      <LanguageContext.Provider value={lang}>
        <Head>
          <title>adjsky | Site</title>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
          <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        </Head>
        <PageInfo />
        <div className="content">
          <Component {...pageProps} />
        </div>
        <PageFooter />
      </LanguageContext.Provider>
    )
  }
}

export default withRouter(MyApp)
