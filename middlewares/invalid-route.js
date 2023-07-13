const { NotFoundError } = require("../utils/errors");

// middleware for invalid route
const routeMiddleware = (req, res, next) => {
  throw NotFoundError("Route not found");
};

module.exports = routeMiddleware;
