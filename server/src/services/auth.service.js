const config = require("../config/config");
const User = require("../models/user.model");
const AppError = require("../utils/error");
const { generateAccessToken, generateRefreshToken, verifyRefreshToken } = require("../utils/generateToken");
const STATUS_CODE = require("../utils/statusCode");

const createUser = async (data) => {
    try {
        const { email, password, name } = data;
        const normalizedEmail = email.toLowerCase().trim();
        const userExist = await User.findOne({ email: normalizedEmail });
        if (userExist) {
            throw new AppError("User Already Exists", STATUS_CODE.BAD_REQUEST);
        }
        const user = await User.create({
            email: normalizedEmail,
            name,
            password
        });
        return user;
    } catch (error) {
        if (error instanceof AppError) {
            throw error;
        }
        throw new AppError("Error creating user", STATUS_CODE.INTERNAL_SERVER_ERROR);
    }
}

const loginUser = async (data) => {
    try {
        const { email, password } = data;
        const normalizedEmail = email.toLowerCase().trim();

        const user = await User.findOne({ email: normalizedEmail });
        if (user && (user.comparePassword(password))) {
            return {
                user,
                accessToken: generateAccessToken(user._id, user.tokenVersion),
                refreshToken: generateRefreshToken(user._id, user.tokenVersion)
            };
        }
        else {
            throw new AppError("Invalid Credentials", STATUS_CODE.UNAUTHORIZED);
        }
    } catch (error) {
        if (error instanceof AppError) {
            throw error;
        }
        throw new AppError("Error login user", STATUS_CODE.INTERNAL_SERVER_ERROR);
    }
}

const refreshHandler = async (data) => {
    try {
        const { token } = data;

        if (!token) {
            throw new AppError("Refresh Token Missing", STATUS_CODE.UNAUTHORIZED);
        }

        const payload = await verifyRefreshToken(token);

        const user = await User.findById(payload.userId);

        if (!user) {
            throw new AppError("User not found", STATUS_CODE.UNAUTHORIZED);
        }

        if (user.tokenVersion != payload.tokenVersion) {
            throw new AppError("Refresh token invalidated", STATUS_CODE.UNAUTHORIZED);
        }

        const newAccessToken = generateAccessToken(user._id, user.tokenVersion);
        const newRefreshToken = generateRefreshToken(user._id, user.tokenVersion);

        return {
            newAccessToken,
            newRefreshToken,
            user
        };
    } catch (error) {
        if (error instanceof AppError) {
            throw error;
        }
        throw new AppError("Error refreshing token", STATUS_CODE.INTERNAL_SERVER_ERROR);
    }
}

const findUser = async (id) => {
    try {
        const user = await User.findById(id);

        if (!user) {
            throw new AppError("User not found", STATUS_CODE.UNAUTHORIZED);
        }

        return user;
    } catch (error) {
        if (error instanceof AppError) {
            throw error;
        }
        throw new AppError("Error finding user", STATUS_CODE.INTERNAL_SERVER_ERROR);
    }    
}

//forgot-password service


//reset-password service

module.exports = {
    createUser,
    loginUser,
    refreshHandler,
    findUser
}