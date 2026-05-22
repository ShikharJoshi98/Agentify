const mongoose = require("mongoose");
const config = require("./config");

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(config.MONGO_URI);
        if (conn.connection.host) {
            console.log("DB connected successfully");
        }
    } catch (error) {
        console.error("Error connecting to DB", error.message);
        process.exit(1);
    }
}

module.exports = connectDB;