const express = require('express');
const router = express();
const baseController = require("../controllers/base-controller");


router.get("/orders", baseController.orders);

module.exports = router;