// controllers/history.controller.js
const History = require('../models/history');
const Cart = require('../models/cart');
const Product = require('../models/product');

exports.getHistoryByUser = async (req, res) => {
  try {
    const history = await History.findAll({
      where: { uid: req.params.uid },
      include: [Product],
      order: [['payment_date', 'DESC']],
    });
    res.json(history);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createHistory = async (req, res) => {
  const { uid, address, phone } = req.body;

  try {
    const cartItems = await Cart.findAll({ where: { uid }, include: [Product] });

    if (cartItems.length === 0) {
      return res.status(400).json({ message: 'Cart is empty' });
    }

    const historyRecords = [];
    for (const item of cartItems) {
      const total = item.quantity * item.Product.p_cash;
      const history = await History.create({
        uid,
        pid: item.pid,
        total_amount: total,
        address,
        phone,
      });
      historyRecords.push(history);
    }

    // Clear cart
    await Cart.destroy({ where: { uid } });

    res.status(201).json({
      message: 'Checkout successful',
      history: historyRecords
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
