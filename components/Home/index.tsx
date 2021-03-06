import React from "react"
import { useRouter } from "next/router"
import { NextSeo } from "next-seo"
import Link from "next/link"
import { useTranslation } from "next-i18next"

import { getLocalizedURL } from "@/src/locales"
import { generateTags } from "@/src/seo"

import styles from "./Home.module.css"

function Home(): JSX.Element {
  const router = useRouter()
  const { t } = useTranslation(["common", "home"])

  return (
    <>
      <NextSeo
        {...generateTags(
          t("home:pageTitle"),
          t("home:metaContent"),
          getLocalizedURL(router)
        )}
      />
      <div className={styles.home}>
        <h1 className={styles.title}>{t("home:title")}</h1>
        <Link href="/resume">
          <a className={styles.link}>-{t("home:check")}-</a>
        </Link>
      </div>
    </>
  )
}

export default Home
