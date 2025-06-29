const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');
module.exports = (sequelize) =>
  sequelize.define('User', {
    uid: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    username: { type: DataTypes.STRING(20), allowNull: false, unique: true },
    phone_number: { type: DataTypes.STRING(10), allowNull: false },
    password: { type: DataTypes.STRING(100), allowNull: false },
    role: {
      type: DataTypes.ENUM('admin', 'user'),
      defaultValue: 'user',
    },
  }, {
    tableName: 'users',
    timestamps: false,
  });
