const appLogger = require("../utils/logger")
const mongoose = require('mongoose');

module.exports = function() {
  mongoose.connect('mongodb://localhost/learning')
    .then(() => appLogger.info('Connected to MongoDB'))
    .catch((e) => appLogger.error("Error connecting to MongoDB", e));
}