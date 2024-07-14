const express = require("express");
const jobController = require("../controllers/jobController");

const router = express.Router();

router.route("/").post(jobController.createOrder);

module.exports = router;
