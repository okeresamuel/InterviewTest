const express = require("express")
const app = express()
const db = require("./config/db")
const TransportQueue = require("./models/TransportQueue")
const cors = require("cors")

app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(cors())


app.post("/App", async(req, res)=>{
const data = req.body;
const foundData = await TransportQueue.build(data)
const savedData = await foundData.save()
savedData ? res.status(200).json(savedData) : res.status(301).json("creation was unsuccessfull")
})

app.get("/App", async(req, res)=>{;
    const foundData = await TransportQueue.findAll()
    foundData ? res.status(200).json(foundData) : res.json("no data found")
})

TransportQueue.sync({force: true})
const port = process.env.PORT || 5000
app.listen(port, console.log(`server listening on port ${port}`))

