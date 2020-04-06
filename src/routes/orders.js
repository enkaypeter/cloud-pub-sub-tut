const express = require('express');
const router = express();
const ordersController = require("../controllers/orders-controller");


router.get("/", ordersController.orders);
router.post("/create", ordersController.createOrders);

module.exports = router;