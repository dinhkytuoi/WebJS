// routes/cart.routes.js
const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cart.controller');
const { authenticate } = require('../middlewares/authMiddleware');

router.get('/:uid', authenticate, cartController.getCartByUser);
router.post('/', authenticate, cartController.addToCart);
router.put('/:cid', authenticate, cartController.updateCartItem);
router.delete('/:cid', authenticate, cartController.removeFromCart);

module.exports = router;
