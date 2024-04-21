const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderControllers");

router.post("/placeorder", orderController.placeorder);

router.get("/getuserorders/:userID", orderController.getuserorders);

module.exports = router;
