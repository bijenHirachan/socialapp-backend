const express = require("express")
const cors = require("cors")

const app = express()
// const path = require("path")

const cookieParser = require("cookie-parser")

if(process.env.NODE_ENV !== "production"){
    require("dotenv").config({ path: "server/config/config.env"})
}

// using middlewares
app.use(cors())
app.use(express.json({ limit: "50mb"}))
app.use(express.urlencoded({ limit: "50mb", extended: true}))
app.use(cookieParser())

// importing routes
const postRoutes = require("./routes/postRoutes")
const userRoutes = require("./routes/userRoutes")

app.use("/api/v1", postRoutes)
app.use("/api/v1", userRoutes)


// app.use(express.static(path.join(__dirname, "../client/build")))

// app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "../client/build/index.html"))
// })

module.exports = app