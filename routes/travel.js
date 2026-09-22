const express = require("express");
const router = express.Router();

const { isLoggedIn } = require("../middleware.js");
const travelController = require("../controllers/travel.js");

router.get(
    "/",
    isLoggedIn,
    travelController.renderAssistant
);

router.post(
    "/recommend",
    isLoggedIn,
    travelController.recommend
);

module.exports = router;