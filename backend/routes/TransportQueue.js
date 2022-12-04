const express = require("express")
const router = express.Router()
const {get__TransportQueue, post__TransportQueue} = require("../controllers/TransportationQueue")

router.get("/", get__TransportQueue)
router.post("/", post__TransportQueue)

module.exports = router;