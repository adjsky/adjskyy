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
      isLoading: false,
      siteLoaded: false,
    }

    this.handleRouteChange = this.handleRouteChange.bind(this)
    this.handleRouteComplete = this.handleRouteComplete.bind(this)
  }

  componentDidMount() {
    window.onload = () => {
      this.setState({ siteLoaded: true })
    }

    const { router } = this.props
    router.events.on("routeChangeStart", this.handleRouteChange)
    router.events.on("routeChangeComplete", this.handleRouteComplete)
  }

  componentWillUnmount() {
    const { router } = this.props
    router.events.off("routeChangeStart", this.handleRouteChange)
    router.events.off("routeChangeComplete", this.handleRouteComplete)
  }

  handleRouteChange() {
    this.setState({ isLoading: true })
  }

  handleRouteComplete() {
    this.setState({ isLoading: false })
  }

  render() {
    const { Component, pageProps } = this.props
    const { lang, isLoading, siteLoaded } = this.state

    const app = (
      <>
        <PageInfo />
        <div className="content">
          {isLoading ? <span>Loading...</span> : <Component {...pageProps} />}
        </div>
        <PageFooter />
      </>
    )

    const overlayStyle = {
      opacity: siteLoaded ? 0 : 1,
    }

    return (
      <LanguageContext.Provider value={lang}>
        <Head>
          <title>adjsky | Site</title>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
          <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        </Head>
        <div className="site-overlay" style={overlayStyle} />
        { siteLoaded ? app : null }
      </LanguageContext.Provider>
    )
  }
}

export default withRouter(MyApp)
