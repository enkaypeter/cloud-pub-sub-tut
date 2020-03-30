const express = require('express');
const router = express();
const baseController = require("../controllers/base-controller");


router.get("/delivery", baseController.deliveries);

module.exports = router;