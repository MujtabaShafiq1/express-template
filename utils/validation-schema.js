const JoiInstance = require("../utils/joi-instance")

// Joi validation schema for adding a new product
const addProductSchema = JoiInstance.object({
  name: JoiInstance.string().required(),
  description: JoiInstance.string().required(),
  price: JoiInstance.number().required(),
  quantity: JoiInstance.number().required(),
});

// Joi validation schema for updating a product
const updateProductSchema = JoiInstance.object({
  name: JoiInstance.string(),
  description: JoiInstance.string(),
  price: JoiInstance.number(),
  quantity: JoiInstance.number(),
}).min(1);

module.exports = {
  addProductSchema,
  updateProductSchema,
};
