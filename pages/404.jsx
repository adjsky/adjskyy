import React from "react"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useTranslation } from "next-i18next"

function NotFound() {
  const { t } = useTranslation("404")
  return (
    <div className="not_found">
      <h1>{t("notFound")}</h1>
    </div>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["footer", "nav", "404"])),
    },
  }
}

export default NotFound
