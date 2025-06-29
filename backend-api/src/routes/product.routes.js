// routes/product.routes.js
const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller');
const { authenticate, isAdmin } = require('../middlewares/authMiddleware');

router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductById);

// Chỉ admin được làm những route này:
router.post('/', authenticate, isAdmin, productController.createProduct);
router.put('/:id', authenticate, isAdmin, productController.updateProduct);
router.delete('/:id', authenticate, isAdmin, productController.deleteProduct);

module.exports = router;
