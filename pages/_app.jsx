import React from "react"
import Head from "next/head"
import { withRouter } from "next/router"
import { ClipLoader } from "react-spinners"
import NProgress from "nprogress"
import LanguageContext from "../contexts/LanguageContext.jsx"
import PageInfo from "../components/PageInfo/PageInfo.jsx"
import PageFooter from "../components/PageFooter/PageFooter.jsx"
import "./global.css"

function handleRouteChange() {
  NProgress.start()
}

function handleRouteComplete() {
  NProgress.done()
}

class MyApp extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      lang: "en",
      siteLoaded: false,
    }
  }

  componentDidMount() {
    NProgress.configure({ showSpinner: false })
    window.onload = () => {
      this.setState({ siteLoaded: true })
    }
    const { router } = this.props
    router.events.on("routeChangeStart", handleRouteChange)
    router.events.on("routeChangeComplete", handleRouteComplete)
  }

  componentWillUnmount() {
    const { router } = this.props
    router.events.off("routeChangeStart", handleRouteChange)
    router.events.off("routeChangeComplete", handleRouteComplete)
  }

  render() {
    const { Component, pageProps } = this.props
    const { lang, siteLoaded } = this.state

    const overlayStyle = {
      animation: siteLoaded ? "fadeOut 0.5s ease-in-out" : "",
      visibility: siteLoaded ? "hidden" : "visible",
    }

    return (
      <LanguageContext.Provider value={lang}>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
          <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        </Head>
        <div className="site-overlay" style={overlayStyle}>
          <ClipLoader color="#3b3b3b" loading={!siteLoaded} size={150} />
        </div>
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
