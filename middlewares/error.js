const ERROR_CODES = require("../utils/constants/error-codes");
const appLogger = require("../utils/logger");

//middleware for error
const errorMiddleware = (err, req, res, next) => {
  const errStatus = err.status || ERROR_CODES.INTERNAL_SERVER_ERROR;
  const errMessage = err.message || "Server Error, Something went wrong";
  appLogger.error(errMessage, err);
  return res.status(errStatus).send({ message: errMessage });
};

module.exports = errorMiddleware;
