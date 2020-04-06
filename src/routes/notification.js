const express = require('express');
const router = express();
const notificationsController = require("../controllers/notification-controller");


router.get("/notification", notificationsController.notificationsHome);
router.post("/notification/pull", notificationsController.pullNotification);
router.post("/notification/push", notificationsController.pushNotification);

module.exports = router;