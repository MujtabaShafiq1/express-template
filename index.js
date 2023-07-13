const express = require("express");
const app = express();

// middlewares
const errorMiddleware = require("./middlewares/error");

// utils
const appLogger = require("./utils/logger");

// dependencies
require("express-async-errors");

// startup
require("./startup/routes")(app);
require("./startup/db")()

// global middlewares
app.use(errorMiddleware);

const PORT = 5001;
app.listen(PORT, () => appLogger.info(`Listening on PORT: ${PORT} !`));
