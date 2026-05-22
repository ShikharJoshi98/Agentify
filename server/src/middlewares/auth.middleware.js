const AppError = require("../utils/error");
const { verfiyAccessToken } = require("../utils/generateToken");
const STATUS_CODE = require("../utils/statusCode");
const authService = require("../services/auth.service");

const authMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        throw new AppError("You are not authenticated", STATUS_CODE.UNAUTHORIZED);
    }

    const token = authHeader.split(" ")[1];

    try {
        const payload = verfiyAccessToken(token);

        const user = await authService.findUser(payload.userId);
        
    } catch (error) {

    }
}