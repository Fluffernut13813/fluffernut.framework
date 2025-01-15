// src/core/notifier.js

const axios = require('axios');

class Notifier {
  static sendSlackMessage(message, webhookUrl) {
    axios.post(webhookUrl, { text: message })
      .then(() => console.log('Notification sent'))
      .catch(err => console.error(`Failed to send notification: ${err.message}`));
  }
}

module.exports = Notifier;
