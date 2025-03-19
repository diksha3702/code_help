import ErrorResponse from "../utils/errorResponse.js";


const errorHandler = (err , req, res, next) =>
{
    res.status(err.statuscode || 500).json({
        success:false,
        error : err.message|| "Server Error"
    });

};

export default errorHandler;