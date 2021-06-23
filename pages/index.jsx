import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import Home from "./Home/Home.jsx"

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "home", "footer", "nav"])),
    },
  }
}

export default Home
