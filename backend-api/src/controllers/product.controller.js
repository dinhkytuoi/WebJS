// controllers/product.controller.js
const Product = require('../models/product');

// Get all products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll({ where: { is_deleted: false } });
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get product by ID
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product || product.is_deleted) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create product
exports.createProduct = async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update product
exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product || product.is_deleted) {
      return res.status(404).json({ message: 'Product not found' });
    }

    await product.update(req.body);
    res.json({ message: 'Product updated', product });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Soft delete product
exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product || product.is_deleted) {
      return res.status(404).json({ message: 'Product not found' });
    }

    await product.update({ is_deleted: true });
    res.json({ message: 'Product deleted (soft)' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
