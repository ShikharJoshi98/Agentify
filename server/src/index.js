const express = require("express");
const config = require("./config/config");
const connectDB = require("./config/db");
const errorHandler = require("./middlewares/error.middleware");
const apiRoutes = require("./routes");
const cookieParser = require("cookie-parser");
const corsMiddleware = require("./middlewares/cors.middleware");
const helmet = require("helmet");

const app = express();

app.use(helmet());
app.use(corsMiddleware);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

connectDB();

app.use("/api", apiRoutes);

app.use(errorHandler);

const startServer = () => {
    try {
        app.listen(config.PORT, () => {
            console.log(`Server listening on port ${config.PORT}`);
        })
    } catch (error) {
        console.error("Error in estabilishing the server", error.message);
        process.exit(1);
    }
}

startServer();