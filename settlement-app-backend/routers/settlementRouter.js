const express = require("express");
const router = express.Router();
const settlementController = require("../controllers/settlementController");

router.get("/status", settlementController.getStatus);
router.post("/submit", settlementController.submitAmount);
router.post("/respond", settlementController.respond);
router.post("/reset", settlementController.resetSettlement);

module.exports = router;
