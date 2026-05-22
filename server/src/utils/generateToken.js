const jwt = require("jsonwebtoken");
const config = require("../config/config");

const generateAccessToken = (userId, tokenVersion) => {
    return jwt.sign(
        {
            userId,
            tokenVersion
        },
        config.JWT_ACCESS,
        {
            expiresIn: "30m"
        }
    );    
}

const generateRefreshToken = (userId, tokenVersion) => {
    return jwt.sign(
        {
            userId,
            tokenVersion
        },
        config.JWT_ACCESS,
        {
            expiresIn: "7d"
        }
    );    
}

const verifyRefreshToken = (token) => {
    return jwt.verify(token, config.JWT_ACCESS);
}

const verfiyAccessToken = (token) => {
    return jwt.verify(token, config.JWT_ACCESS);
}

module.exports = {
    generateAccessToken,
    generateRefreshToken,
    verifyRefreshToken,
    verfiyAccessToken
};