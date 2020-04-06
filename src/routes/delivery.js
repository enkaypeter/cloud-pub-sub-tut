const express = require('express');
const router = express();
const deliveryController = require("../controllers/delivery-controller");


router.get("/delivery", deliveryController.deliveryHome);
router.post("/delivery/pull", deliveryController.pullDelivery);
router.post("/delivery/push", deliveryController.pushDelivery)

module.exports = router;