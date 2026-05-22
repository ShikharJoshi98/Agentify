const config = require("../config/config");
const authService = require("../services/auth.service");
const successResponse = require("../utils/response");
const STATUS_CODE = require("../utils/statusCode");

const register = async (req, res, next) => {
    try {
        const user = await authService.createUser(req.body);
        successResponse(res, user, "User created successfully", STATUS_CODE.CREATED);
    } catch (error) {
        next(error);
    }
}

const login = async (req, res, next) => {
    try {
        const { user, accessToken, refreshToken } = await authService.loginUser(req.body);

        const accessCookieOptions = {
            httpOnly: true,
            secure: config.NODE_ENV === "production",
            sameSite: "lax", 
            maxAge: 30 * 60 * 1000
        };

        const refreshCookieOptions = {
            httpOnly: true,
            secure: config.NODE_ENV === "production",
            sameSite: "lax", 
            maxAge: 7 * 24 * 60 * 60 * 1000
        };

        res.cookie("accessToken", accessToken, accessCookieOptions);
        res.cookie("refreshToken", refreshToken, refreshCookieOptions);

        successResponse(res, user, "Logged in successfully", STATUS_CODE.OK);
    } catch (error) {
        next(error);
    }
}

const logout = async (req, res, next) => {
    try {
        res.clearCookie("refreshToken", { path: "/" });
        successResponse(res, {}, "Logged out successfully", STATUS_CODE.OK);
    } catch (error) {
        next(error);
    }
}

//forgot-password controller


//reset-password controller

module.exports = {
    register,
    login,
    refreshController,
    logout
}