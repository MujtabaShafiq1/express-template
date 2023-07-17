const { NotFoundError } = require("../utils/errors");
const Product = require("../models/product");

// Get all products
const getAllProducts = async (req, res) => {
  const products = await Product.find();
  res.status(200).send(products);
};

// Get product by ID
const getProductById = async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) throw NotFoundError("Product not found");
  res.status(200).send(product);
};

// Add a new product
const addNewProduct = async (req, res) => {
  const { name, description, price, quantity } = req.body;
  const product = new Product({ name, description, price, quantity });
  await product.save();
  res.status(201).send(product);
};

// Update a product
const updateProduct = async (req, res) => {
  const { name, description, price, quantity } = req.body;

  const product = await Product.findByIdAndUpdate(
    req.params.id,
    { name, description, price, quantity },
    { new: true }
  );

  if (!product) throw NotFoundError("Product not found");
  res.status(200).json(product);
};

// Delete all products
const deleteAllProducts = async (req, res) => {
  await Product.deleteMany();
  res.status(200).send({ message: "All products deleted successfully" });
};

// Delete a product by ID
const deleteProductById = async (req, res) => {
  const product = await Product.findByIdAndDelete(req.params.id);
  if (!product) throw NotFoundError("Product not found");
  res.status(200).send({ message: "Product deleted successfully" });
};

module.exports = { 
  getAllProducts,
  getProductById,
  addNewProduct,
  updateProduct,
  deleteAllProducts,
  deleteProductById,
}