// src/utils/config.js

require('dotenv').config();

module.exports = {
  EXCHANGE_API_KEY: process.env.EXCHANGE_API_KEY,
  EXCHANGE_SECRET_KEY: process.env.EXCHANGE_SECRET_KEY,
};
