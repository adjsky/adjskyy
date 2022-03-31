import { NextApiHandler } from "next"
import ProjectsProvider from "@/src/services/ProjectsProvider"
import { isLocaleDeclared } from "@/src/locales"

const handle: NextApiHandler = (req, res) => {
  try {
    const { locale } = req.query

    if (!locale || Array.isArray(locale)) {
      throw new Error("Invalid request data")
    }

    if (!isLocaleDeclared(locale)) {
      throw new Error("No projects data found with provided locale")
    }

    const service = new ProjectsProvider()

    const result = service.getStructuredData(locale)

    if (!result) {
      res.status(404).json({
        status: 404,
        message: "Nothing found",
      })

      return
    }

    res.status(200).json({
      status: 200,
      data: result,
    })
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({
        status: 400,
        data: error.message,
      })
    } else {
      res.status(500).json({
        status: 500,
        data: "Internal error",
      })
    }
  }
}

export default handle
