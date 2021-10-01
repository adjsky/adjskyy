import React from "react"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useTranslation } from "next-i18next"
import type { GetStaticProps, GetStaticPropsContext } from "next"

function NotFound(): JSX.Element {
  const { t } = useTranslation("404")
  return (
    <div className="not_found">
      <h1>{t("notFound")}</h1>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
  const locale = context.locale ? context.locale : "en"
  return {
    props: {
      ...(await serverSideTranslations(locale, ["footer", "nav", "404"])),
    },
  }
}

export default NotFound
