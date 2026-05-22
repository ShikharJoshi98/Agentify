const express = require("express");
const authController = require("../controllers/auth.controller");
const validate = require("../middlewares/validate.middleware");
const { registerValidation, loginValidation } = require("../utils/validation");

const router = express.Router();

router.post("/register", 
    validate(registerValidation),
    authController.register
);

router.post("/login", 
    validate(loginValidation),
    authController.login
);

router.post("/refresh", 
    authController.refreshController
);

router.post("/logout", 
    authController.logout
);

//reset password route

//forgot password route

module.exports = router;