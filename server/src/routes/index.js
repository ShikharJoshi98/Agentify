const express = require("express");
const authRoutes = require("./auth.route");
const agentRoutes = require("./agent.route");

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/agent", agentRoutes);

module.exports = router;