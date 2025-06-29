const { DataTypes } = require('sequelize');

module.exports = (sequelize) =>
  sequelize.define('History', {
    history_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    uid: { type: DataTypes.INTEGER, allowNull: false },
    pid: { type: DataTypes.INTEGER, allowNull: false },
    payment_date: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    total_amount: { type: DataTypes.INTEGER, allowNull: false },
    address: { type: DataTypes.STRING(1000) },
    phone: { type: DataTypes.BIGINT },
  }, {
    tableName: 'history',
    timestamps: false,
  });
