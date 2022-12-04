const express = require("express")
const router = express.Router()
const {get__TransportQueue, post__TransportQueue} = require("../controllers/TransportQueue")

router.post("/App", post__TransportQueue)
router.get("/App", get__TransportQueue)

module.exports = router;