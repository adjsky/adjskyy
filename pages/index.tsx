import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import Home from "@/components/Home"

import type { GetStaticProps, GetStaticPropsContext } from "next"

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const locale = context.locale ? context.locale : "en"

  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "home",
        "footer",
        "nav",
      ])),
    },
  }
}

export default Home
