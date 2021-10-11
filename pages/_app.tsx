import React from "react"
import Head from "next/head"
import { withRouter } from "next/router"
import { appWithTranslation } from 'next-i18next'
import { ClipLoader } from "react-spinners"
import NProgress from "nprogress"
import PageNav from "../components/PageNav"
import PageFooter from "../components/PageFooter"
import type { AppProps } from "next/app"
import type { NextRouter } from "next/router" 
import "@/styles/global.css"

function handleRouteChange(): void {
  NProgress.start()
}

function handleRouteComplete(): void {
  NProgress.done()
}

let firstLoad = true

type TProps = AppProps & {
  router: NextRouter
}

type TState = {
  siteLoaded: boolean
}

class MyApp extends React.Component<TProps, TState> {
  constructor(props: AppProps) {
    super(props)

    this.state = {
      siteLoaded: !firstLoad
    }
  }

  componentDidMount() {
    NProgress.configure({ showSpinner: false })
    window.onload = () => {
      if (firstLoad) {
        firstLoad = false
      }
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
    const { siteLoaded } = this.state

    const overlayStyle: React.CSSProperties = {
      animation: siteLoaded && firstLoad ? "fadeOut 0.5s ease-in-out" : "",
      visibility: siteLoaded && !firstLoad ? "hidden" : "visible",
    }

    return (
      <>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
          <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        </Head>
        <div className="site-overlay" style={overlayStyle}>
          <ClipLoader color="#3b3b3b" loading={!siteLoaded} size={150} />
        </div>
        <PageNav />
        <div className="content">
          <Component {...pageProps} />
        </div>
        <PageFooter />
      </>
    )
  }
}

export default withRouter(appWithTranslation(MyApp))
