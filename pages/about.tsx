import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import About from "../components/About/About"
import type { GetStaticProps, GetStaticPropsContext } from "next"

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
  const locale = context.locale ? context.locale : "en"
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "about", "footer", "nav"])),
    },
  }
}

export default About
