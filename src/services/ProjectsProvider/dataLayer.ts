import path from "path"
import Parser from "../parser"

import type { TProjects } from "./types"
import type { LocalesType } from "@/src/locales"

/**
 * Get raw projects data
 *
 * @param locale
 */
function getData(locale: LocalesType): TProjects | null {
  const parser = new Parser("yaml")

  const result = parser.parse<TProjects>(
    path.resolve(".", `./public/projectsInfo/${locale}.yaml`)
  )

  return result
}

export default getData
