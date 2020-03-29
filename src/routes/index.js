const express = require('express');
const router = express();
const baseController = require("../controllers/base-controller");


router.get("/", baseController.index);

module.exports = router;