import getData from "./dataLayer"

import type { TProjects } from "./types"

/**
 * Class that gives an opportunity to get all projects with the needed data
 */
class ProjectsProvider {
  getStructuredData(): TProjects[] | null {
    const result = getData()

    return result
  }
}

export default ProjectsProvider
