// src/core/chartGenerator.js

const Chart = require('chart.js');
const fs = require('fs');

class ChartGenerator {
  static generateChart(data, symbol) {
    // Here you can implement the logic to visualize your data using Chart.js or Plotly
    const chartData = {
      labels: data.map(d => new Date(d[0]).toLocaleString()),
      datasets: [{
        label: symbol,
        data: data.map(d => d[4]), // Closing price
        borderColor: '#FF5733',
        fill: false,
      }],
    };

    const ctx = document.getElementById('cryptoChart').getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: chartData,
      options: {
        responsive: true,
        scales: {
          x: {
            type: 'time',
            time: {
              unit: 'minute',
            },
          },
        },
      },
    });
  }
}

module.exports = ChartGenerator;
