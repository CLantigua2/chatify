require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const passport = require("passport")
const morgan = require("morgan")
const bodyParser = require("body-parser")
const cors = require("cors")
const helmet = require("helmet")
const users = require("./routes/api/users")
const profile = require("./routes/api/profile")
const channels = require("./routes/api/channel")
// const path = require("path")

const server = express()

// DB Config

// Passport middleware
server.use(passport.initialize())
server.use(express.json())
server.use(helmet())
server.use(cors())
server.use(morgan("dev"))
// parse application/x-www-form-urlencoded
server.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
server.use(bodyParser.json())
// Passport Config
require("./config/passport")(passport)

const uri = process.env.MONGODB_URI || "mongodb://localhost:27017/chat"
// Connect to mongoDB through mongoose
mongoose
  .connect(uri, { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err.message))

//////// Use Routes /////////////
server.use("/api/users", users)
server.use("/api/profile", profile)
server.use("/api/channels", channels)

server.get("/", (req, res) => {
  if (err) {
    res.status(503).json({ message: "Server is damaged" }, res)
    console.log(err)
  } else {
    res.status(200).json({ message: "Server is alive" }, res)
  }
})

// // Server static assets if in production
// if (process.env.NODE_ENV === "production") {
//   // Set static folder
//   server.use(express.static("client/build"))

//   server.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
//   })
// }

const port = process.env.PORT || 9000
server.listen(port, () => {
  console.log(`This server is over ${port}`)
})
