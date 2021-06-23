import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import About from "./About/About.jsx"

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "about", "footer", "nav"])),
    },
  }
}

export default About
