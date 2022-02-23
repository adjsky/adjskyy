import React, { useEffect } from "react"
import Head from "next/head"
import { useRouter } from "next/router"
import { appWithTranslation } from "next-i18next"
import NProgress from "nprogress"
import PageNav from "@/components/PageNav"
import PageFooter from "@/components/PageFooter"
import Preloader from "@/components/Preloader"

import type { AppProps } from "next/app"

import "@/styles/global.css"

function handleRouteChange(): void {
  NProgress.start()
}

function handleRouteComplete(): void {
  NProgress.done()
}

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    if (NProgress.isStarted()) {
      handleRouteComplete()
    }

    NProgress.configure({ showSpinner: false })

    router.events.on("routeChangeStart", handleRouteChange)
    router.events.on("routeChangeComplete", handleRouteComplete)

    return () => {
      router.events.off("routeChangeStart", handleRouteChange)
      router.events.off("routeChangeComplete", handleRouteComplete)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </Head>
      <Preloader />
      <PageNav />
      <div className="content">
        <Component {...pageProps} />
      </div>
      <PageFooter />
    </>
  )
}

export default appWithTranslation(MyApp)
