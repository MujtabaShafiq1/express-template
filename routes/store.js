const router = require("express").Router();

// controller
const {
  getAllProducts,
  getProductById,
  addNewProduct,
  updateProduct,
  deleteAllProducts,
  deleteProductById,
} = require("../controllers/store");

// middlewares
const { validateRequest } = require("../middlewares/validate-request");

// validation
const {
  updateProductSchema,
  addProductSchema,
} = require("../utils/validation-schema");

// routes
router.get("/all-products", getAllProducts);
router.get("/:id", getProductById);

router.post("/add", validateRequest(addProductSchema), addNewProduct);
router.put("/:id", validateRequest(updateProductSchema), updateProduct);

router.delete("/reset", deleteAllProducts);
router.delete("/:id", deleteProductById);

module.exports = router;
