import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import Projects from "@/components/Projects"

import type { GetStaticProps, GetStaticPropsContext } from "next"

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const locale = context.locale ? context.locale : "en"

  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "projects",
        "footer",
        "nav",
      ])),
    },
  }
}

export default Projects
