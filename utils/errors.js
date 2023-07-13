const ERROR_CODES = require("./constants/error-codes");

module.exports.BadRequestError = (message) => {
  return {
    status: ERROR_CODES.BAD_REQUEST,
    message,
  };
};

module.exports.NotFoundError = (message) => {
  return {
    status: ERROR_CODES.NOT_FOUND,
    message,
  };
};

module.exports.InternalServerError = (message) => {
  return {
    status: ERROR_CODES.NOT_FOUND,
    message
  };
};
