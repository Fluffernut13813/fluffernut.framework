// src/core/analysis.js

class Analysis {
  static calculateSMA(data, period) {
    const sma = [];
    for (let i = period - 1; i < data.length; i++) {
      const sum = data.slice(i - period + 1, i + 1).reduce((acc, val) => acc + val[4], 0); // Close prices
      sma.push(sum / period);
    }
    return sma;
  }

  static detectGoldenCross(shortSMA, longSMA) {
    const goldenCrosses = [];
    for (let i = 1; i < shortSMA.length; i++) {
      if (shortSMA[i] > longSMA[i] && shortSMA[i - 1] <= longSMA[i - 1]) {
        goldenCrosses.push(i);
      }
    }
    return goldenCrosses;
  }
}

module.exports = Analysis;
