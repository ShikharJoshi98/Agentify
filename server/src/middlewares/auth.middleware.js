const jwt = require("jsonwebtoken");
const AppError = require("../utils/error");
const STATUS_CODE = require("../utils/statusCode");
const authService = require("../services/auth.service");
const config = require("../config/config");

const authCheck = async (req, res, next) => {
    try {
        const token = req.cookies.accessToken;

        if (!token) {
            throw new AppError("Unauthorized access", STATUS_CODE.UNAUTHORIZED);
        }

        const decoded = jwt.verify(token, config.JWT_ACCESS);

        const user = await authService.findUser(decoded.userId);

        req.user = user;
        next();
    } catch (error) {
        next(error);
    }
}

module.exports = authCheck;

