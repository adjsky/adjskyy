import path from "path"
import Parser from "../parser"

import type { TProjects } from "./types"

/**
 * Get raw projects data
 */
function getData(): TProjects | null {
  const parser = new Parser("yaml")

  const result = parser.parse<TProjects>(
    path.resolve(".", "./public/projectsInfo.yaml")
  )

  return result
}

export default getData
