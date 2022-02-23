import { NextApiHandler } from "next"
import ProjectsProvider from "@/src/services/ProjectsProvider"

const handle: NextApiHandler = (_, res) => {
  const service = new ProjectsProvider()

  const result = service.getStructuredData()

  if (result) {
    res.status(200).json({
      status: 200,
      data: result,
    })

    return
  }

  res.status(404).json({
    status: 404,
    message: "Nothing found",
  })
}

export default handle
