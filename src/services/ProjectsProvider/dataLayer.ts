import path from "path"
import Parser from "../parser"

import type { TProject } from "./types"

/**
 * Get raw projects data
 */
function getData(): TProject[] | null {
  const parser = new Parser("yaml")

  const result = parser.parse<TProject[]>(
    path.join(__dirname, "../../../../public/projectsInfo.yaml")
  )

  return result
}

export default getData
