const { z } = require("zod");

const registerValidation = z.object({
    email: z.email("Invalid Email").min(1, "Email is required"),
    password: z.string("Password is required").min(1, "Password is required"),
    name: z.string("Name is required").min(1, "Name is required")
});

const loginValidation = z.object({
    email: z.email("Invalid Email").min(1, "Email is required"),
    password: z.string("Password is required").min(1, "Password is required")
});

module.exports = {
    registerValidation,
    loginValidation
}