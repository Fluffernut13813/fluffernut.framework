// examples/basic.js

const DataFetcher = require('../src/core/dataFetcher');
const ChartGenerator = require('../src/core/chartGenerator');
const Analysis = require('../src/core/analysis');
const Notifier = require('../src/core/notifier');

(async () => {
  const dataFetcher = new DataFetcher();
  const symbol = 'BTC/USDT';
  const data = await dataFetcher.fetchCryptoData(symbol, '1h', 200);

  const shortSMA = Analysis.calculateSMA(data, 50);
  const longSMA = Analysis.calculateSMA(data, 200);
  const goldenCrosses = Analysis.detectGoldenCross(shortSMA, longSMA);

  if (goldenCrosses.length > 0) {
    Notifier.sendSlackMessage(`Golden Cross detected for ${symbol}!`, process.env.SLACK_WEBHOOK_URL);
  }

  ChartGenerator.generateChart(data, symbol);
})();
