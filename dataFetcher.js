// src/core/dataFetcher.js

const ccxt = require('ccxt');
const { EXCHANGE_API_KEY, EXCHANGE_SECRET_KEY } = require('../utils/config');

class DataFetcher {
  constructor(exchange = 'binance') {
    this.exchange = new ccxt[exchange]({
      apiKey: EXCHANGE_API_KEY,
      secret: EXCHANGE_SECRET_KEY,
    });
  }

  async fetchCryptoData(symbol, timeframe = '1h', limit = 100) {
    try {
      const data = await this.exchange.fetchOHLCV(symbol, timeframe, undefined, limit);
      return data;
    } catch (error) {
      throw new Error(`Error fetching data: ${error.message}`);
    }
  }
}

module.exports = DataFetcher;
