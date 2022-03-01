import getData from "./dataLayer"

import type { TProjects } from "./types"
import type { LocalesType } from "@/src/locales"

/**
 * Class that gives an opportunity to get all projects with the needed data
 */
class ProjectsProvider {
  getStructuredData(locale: LocalesType): TProjects | null {
    const result = getData(locale)

    return result
  }
}

export default ProjectsProvider
