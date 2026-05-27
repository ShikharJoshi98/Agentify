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

router.get("/get/:id", 
    authCheck,
    agentController.get
);

router.patch("/update/:id", 
    authCheck,
    agentController.update
);

module.exports = router;