require("dotenv").config();

module.exports = {
    PORT: process.env.PORT,
    MONGO_URI: process.env.MONGO_URI,
    NODE_ENV: process.env.NODE_ENV,
    JWT_ACCESS: process.env.JWT_ACCESS,
    JWT_REFRESH: process.env.JWT_REFRESH
}