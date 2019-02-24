const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const routes = require("./routes")
const { verifyToken } = require("./controllers/authController")

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.use(verifyToken)

app.use("/api", routes)

module.exports = app
