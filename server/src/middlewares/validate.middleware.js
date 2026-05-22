const STATUS_CODE = require("../utils/statusCode");

const validate = (schema) => {
    return (req, res, next) => {
        const result = schema.safeParse(req.body);
        if (!result.success) {
            const errors = result.error.issues.map(issue => {
                return issue.message;
            });
            
            return res
                .status(STATUS_CODE.BAD_REQUEST)
                .json({
                    success: false,
                    errors
                });
        }

        req.body = result.data;
        next();
    }
}

module.exports = validate;