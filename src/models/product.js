const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

module.exports = (sequelize) =>
  sequelize.define('Product', {
    pid: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    p_name: { type: DataTypes.STRING(80), allowNull: false, unique: true },
    p_cash: { type: DataTypes.INTEGER, allowNull: false },
    p_label: { type: DataTypes.STRING(20), allowNull: false },
    p_information: { type: DataTypes.STRING(3500), allowNull: false },
    p_download_link: { type: DataTypes.STRING(600) },
    p_images: { type: DataTypes.TEXT },
    p_video_url: { type: DataTypes.STRING(255) },
    p_quantity: { type: DataTypes.INTEGER },
    is_deleted: { type: DataTypes.BOOLEAN, defaultValue: false },
  }, {
    tableName: 'product',
    timestamps: false,
  });
