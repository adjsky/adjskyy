import React from "react"
import Head from "next/head"
import Link from "next/link"
import { useTranslation } from "next-i18next"
import styles from "./Home.module.css"

function Home(): JSX.Element {
  const { t } = useTranslation(["common", "home"])
  return (
    <>
      <Head>
        <title>{t("home:pageTitle")}</title>
        <meta name="description" content={t("home:metaContent")} />
      </Head>
      <div className={styles.home}>
        <h1 className={styles.title}>
          {t("home:title")}
        </h1>
        <Link href="/projects">
          <a className={styles.link}>
            -
            {t("home:check")}
            -
          </a>
        </Link>
      </div>
    </>
  )
}

export default Home
