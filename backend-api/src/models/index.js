const { Sequelize } = require('sequelize');
const sequelize = require('../config/sequelize');

require('dotenv').config();


const User = require('./user')(sequelize);
const Product = require('./product')(sequelize);
const Cart = require('./cart');
const History = require('./history')(sequelize);

User.hasMany(Cart, { foreignKey: 'uid' });
Cart.belongsTo(User, { foreignKey: 'uid' });

Product.hasMany(Cart, { foreignKey: 'pid' });
Cart.belongsTo(Product, { foreignKey: 'pid' });

User.hasMany(History, { foreignKey: 'uid' });
Product.hasMany(History, { foreignKey: 'pid' });

History.belongsTo(User, { foreignKey: 'uid' });
History.belongsTo(Product, { foreignKey: 'pid' });

module.exports = { sequelize, User, Product, Cart, History };
