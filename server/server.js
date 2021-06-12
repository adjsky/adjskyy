const express = require("express")
const path = require("path")

const app = express()
const port = 8081

app.use("/assets", express.static(path.join(__dirname, "../build")))
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} ${req.ip}`)
  next()
})

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../build/index.html"))
})

app.listen(port, () => {
  console.log(`Listening at port: ${port}`)
})
