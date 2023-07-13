const express = require("express");
const store = require("../routes/store");
const routeMiddleware = require("../middlewares/invalid-route");

module.exports = function (app) {
  app.use(express.json());
  app.use("/api/store", store);
  app.use(routeMiddleware);
};
