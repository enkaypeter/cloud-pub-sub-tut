const express = require('express');
const router = express();
const baseController = require("../controllers/base-controller");


router.get("/notification", baseController.notifications);

module.exports = router;