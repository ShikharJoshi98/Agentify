const config = require("../config/config");
const User = require("../models/user.model");
const AppError = require("../utils/error");
const { generateAccessToken, generateRefreshToken, verifyRefreshToken } = require("../utils/generateToken");
const STATUS_CODE = require("../utils/statusCode");

const createUser = async (data) => {
    try {
        const email = String(data.email).toLowerCase().trim();
        const password = String(data.password);
        const name = String(data.name);

        const userExist = await User.findOne({ email });
        if (userExist) {
            throw new AppError("User Already Exists", STATUS_CODE.BAD_REQUEST);
        }
        const user = await User.create({
            email,
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

        const email = String(data.email).toLowerCase().trim();
        const password = String(data.password);

        const user = await User.findOne({ email });

        if (!user) {
            throw new AppError("Invalid Credentials", STATUS_CODE.UNAUTHORIZED);
        }

        const isMatch = await user.comparePassword(password);

        if (!isMatch) {
            throw new AppError("Invalid Credentials", STATUS_CODE.UNAUTHORIZED);
        }

        return {
            user,
            accessToken: generateAccessToken(
                user._id,
                user.tokenVersion
            ),
            refreshToken: generateRefreshToken(
                user._id,
                user.tokenVersion
            )
        };

    } catch (error) {
        if (error instanceof AppError) {
            throw error;
        }
        throw new AppError("Error login user", STATUS_CODE.INTERNAL_SERVER_ERROR);
    }
};

const findUser = async (id) => {
    try {
        if (!id) {
            throw new AppError("Invalid user id", STATUS_CODE.UNAUTHORIZED);
        }
        const user = await User.findById(id);

        if (!user) {
            throw new AppError("User not found", STATUS_CODE.UNAUTHORIZED);
        }

        return user;
    } catch (error) {
        if (error.name === "CastError") {
            throw new AppError("Invalid user id", STATUS_CODE.UNAUTHORIZED);
        }
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