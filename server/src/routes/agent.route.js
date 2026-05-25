const express = require("express");
const agentController = require("../controllers/agent.controller");
const authCheck = require("../middlewares/auth.middleware");

const router = express.Router();

router.post("/create", 
    authCheck,
    agentController.create
);

router.get("/getAll", 
    authCheck,
    agentController.getAll
);

module.exports = router;