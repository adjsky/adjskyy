import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import Projects from "@/components/Projects"
import ProjectsProvider from "@/src/services/ProjectsProvider"

import type { GetStaticProps, GetStaticPropsContext } from "next"
import type { ProjectsProps } from "@/components/Projects/types"

export const getStaticProps: GetStaticProps<ProjectsProps> = async (
  context: GetStaticPropsContext
) => {
  const locale = context.locale ? context.locale : "en"
  const service = new ProjectsProvider()

  const projects = service.getStructuredData()

  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "projects",
        "footer",
        "nav",
      ])),
      projects,
    },
  }
}

export default Projects
