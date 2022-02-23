import YAML from "yaml"
import fs from "fs"

/**
 * Class that gives an opportunity to parse a file and get its contents
 * with a provided structure
 */
class Parser {
  private selectedExtension: string

  /**
   * @param extension file extension
   */
  constructor(extension: "yaml") {
    this.selectedExtension = extension
  }

  /**
   * Parse a given file and return its contents with a provided structure type
   * @param path where the needed file is located
   */
  parse<T>(path: string): T | null {
    try {
      const file = fs.readFileSync(path, "utf8")

      const result: T = YAML.parse(file)

      return result
    } catch (error) {
      return null
    }
  }
}

export default Parser
