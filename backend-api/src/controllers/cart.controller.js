// controllers/cart.controller.js
const Cart = require('../models/cart');
const Product = require('../models/product');

// Lấy giỏ hàng theo UID
exports.getCartByUser = async (req, res) => {
  try {
    const cart = await Cart.findAll({
      where: { uid: req.params.uid },
      include: [Product],
    });
    res.json(cart);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Thêm sản phẩm vào giỏ
exports.addToCart = async (req, res) => {
  const { uid, pid, quantity } = req.body;
  try {
    // Kiểm tra đã có trong giỏ chưa
    const existing = await Cart.findOne({ where: { uid, pid } });
    if (existing) {
      existing.quantity += quantity || 1;
      await existing.save();
      return res.json({ message: 'Cart updated', cart: existing });
    }

    const cart = await Cart.create({ uid, pid, quantity: quantity || 1 });
    res.status(201).json(cart);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Cập nhật số lượng trong giỏ
exports.updateCartItem = async (req, res) => {
  try {
    const cartItem = await Cart.findByPk(req.params.cid);
    if (!cartItem) return res.status(404).json({ message: 'Cart item not found' });

    await cartItem.update({ quantity: req.body.quantity });
    res.json({ message: 'Cart item updated', cartItem });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Xoá sản phẩm khỏi giỏ
exports.removeFromCart = async (req, res) => {
  try {
    const cartItem = await Cart.findByPk(req.params.cid);
    if (!cartItem) return res.status(404).json({ message: 'Cart item not found' });

    await cartItem.destroy();
    res.json({ message: 'Cart item removed' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
