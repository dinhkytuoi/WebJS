// src/config/sequelize.js
const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME || 'ct313h_labs',
  process.env.DB_USER || 'postgres',
  process.env.DB_PASS || 'nqZB9Mex',
  {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    dialect: 'postgres',
    logging: false,
  }
);

module.exports = sequelize;
