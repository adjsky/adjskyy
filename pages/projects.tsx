import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import Projects from "@/components/Projects"
import ProjectsProvider from "@/src/services/ProjectsProvider"
import captureWebsite from "capture-website"
import path from "path"
import config from "@/src/config"

import type { GetStaticProps, GetStaticPropsContext } from "next"
import type { ProjectsProps } from "@/components/Projects/types"

export const getStaticProps: GetStaticProps<ProjectsProps> = async (
  context: GetStaticPropsContext
) => {
  const locale = context.locale ? context.locale : "en"
  const service = new ProjectsProvider()

  const projects = service.getStructuredData()

  if (projects && config.generateProjectsSnapshots == "true") {
    const allProjects = [...projects.own, ...projects.involved]

    for (const project of allProjects) {
      if (project.imagePath) {
        try {
          await captureWebsite.file(
            project.link,
            path.resolve(".", "./public" + project.imagePath),
            {
              type: "webp",
              delay: 5,
              timeout: 0,
              overwrite: true,
            }
          )
        } catch (error) {
          console.log(`[projects.tsx] captureWebsite error: ${error}`)
        }
      }
    }
  }

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
