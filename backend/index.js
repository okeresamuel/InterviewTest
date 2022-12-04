const express = require("express")
const app = express()
const db = require("./config/db")
const TransportQueue = require("./models/TransportQueue") 
const cors = require("cors")

app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(cors())

app.use("/", require("./routes/TransportQueue"))

TransportQueue.sync({force: true})
const port = process.env.PORT || 5000
app.listen(port, console.log(`server listening on port ${port}`))

