const express = require("express");
const authController = require("../controllers/auth.controller");
const validate = require("../middlewares/validate.middleware");
const { registerValidation, loginValidation } = require("../utils/validation");
const authCheck = require("../middlewares/auth.middleware");

const router = express.Router();

router.post("/register", 
    validate(registerValidation),
    authController.register
);

router.post("/login", 
    validate(loginValidation),
    authController.login
);

router.post("/logout", 
    authCheck,
    authController.logout
);

router.get("/checkAuth",
    authCheck,
    authController.authCheck
)

router.post("/refresh",
    authController.refreshAccessTokenController
)

//reset password route

//forgot password route

module.exports = router;