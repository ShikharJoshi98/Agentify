const successResponse = (res, data, message, statusCode) => {
    return res
        .status(statusCode)
        .json({
            success: true,
            message,
            data
        });
}

module.exports = successResponse;