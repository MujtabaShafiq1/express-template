const { createLogger, format, transports } = require("winston");
const { combine, simple, timestamp, prettyPrint } = format;

const formatting = combine(
  simple(),
  timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
  prettyPrint()
);

// for application logs
const appLogger = createLogger({
  format: formatting,
  transports: [
    new transports.Console(),
    new transports.File({ filename: "./logs/app.log" }),
    new transports.File({ filename: "./logs/errorlog.log", level: "error" }),
  ],
  exceptionHandlers: [
    new transports.File({ filename: "./logs/exceptions.log" }),
  ],
  rejectionHandlers: [
    new transports.File({ filename: "./logs/rejections.log" }),
  ],
});

module.exports = { appLogger };
