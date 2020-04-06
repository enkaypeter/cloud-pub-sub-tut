const express = require('express');
const router = express();
const notificationsController = require("../controllers/notification-controller");


router.get("/", notificationsController.notificationsHome);
router.post("/pull", notificationsController.pullNotification);

module.exports = router;