const express = require('express');
const router = express();
const notificationsController = require("../controllers/notification-controller");


router.get("/", notificationsController.notificationsHome);
router.post("/pull", notificationsController.pullNotification);
router.post("/push", notificationsController.pushNotification);

module.exports = router;