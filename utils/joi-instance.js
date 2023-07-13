const Joi = require("joi");

const JoiInstance = Joi.defaults((schema) => {
  return schema.options({
    abortEarly: false,
    errors: {
      wrap: {
        label: false,
      },
    },
  });
});

JoiInstance.objectId = require("joi-objectid")(Joi);
module.exports = JoiInstance;