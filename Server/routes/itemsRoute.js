const express = require("express");
const router = express.Router();
const itemController = require("../controllers/itemController");

router.get("/getallitems", itemController.getallitems);

module.exports = router;
