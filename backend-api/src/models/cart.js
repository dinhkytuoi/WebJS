// src/models/cart.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize'); // 👈 import Sequelize instance

const Cart = sequelize.define('Cart', {
  cid: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  uid: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  pid: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    defaultValue: 1,
  },
}, {
  tableName: 'cart',
  timestamps: false,
});

module.exports = Cart;
