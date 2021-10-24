import express from "express"

import bodyparser from "body-parser"

const app = express()

app.use(bodyparser.urlencoded({ extended : true }))
app.use(express.static("public"))
app.set("view engine", "ejs")

// "/" route
app.get("/", function(req, res) {
    res.render("scrapenav")
})

app.post("/", function(req, res) {
    console.log("POST REQUEST RECEIVED!")
})


const port = process.env.PORT || 3000
app.listen(port, function() {
    console.log(`Server started at port: ${port}`)
})