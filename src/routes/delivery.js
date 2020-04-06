const express = require('express');
const router = express();
const deliveryController = require("../controllers/delivery-controller");


router.get("/", deliveryController.deliveryHome);
router.post("/pull", deliveryController.pullDelivery);
router.post("/push", deliveryController.pushDelivery)

module.exports = router;