const TransportQueue = require("../models/TransportQueue") 
  
// post request 
const post__TransportQueue = async(req, res)=>{
    const data = req.body;
    const foundData = await TransportQueue.build(data)
    const savedData = await foundData.save()
    savedData ? res.status(200).json(savedData) : res.status(301).json("creation was unsuccessfull")
  }

//  sql get data
 const get__TransportQueue =  async(req, res)=>{;
  const foundData = await TransportQueue.findAll()
  foundData ? res.status(200).json(foundData) : res.json("no data found")
}

  module.exports = {
    get__TransportQueue,
    post__TransportQueue
  }