const { BadRequestError } = require("../utils/errors");

const validateRequest = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      const message = error.details.map((i) => i.message);
      throw BadRequestError(message)
    }
    next();
  };
};

module.exports = { validateRequest };
