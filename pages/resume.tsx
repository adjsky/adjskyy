import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import Resume from "@/components/Resume"

import type { GetStaticProps, GetStaticPropsContext } from "next"

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const locale = context.locale ? context.locale : "en"

  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "resume",
        "footer",
        "nav",
      ])),
    },
  }
}

export default Resume
