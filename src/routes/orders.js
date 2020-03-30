const express = require('express');
const router = express();
const ordersController = require("../controllers/orders-controller");


router.get("/orders", ordersController.orders);
router.post("/orders/create", ordersController.createOrders);

module.exports = router;