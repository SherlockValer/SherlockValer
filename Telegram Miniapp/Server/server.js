const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
const PORT = 3000;

// Replace with your bot token
const BOT_TOKEN = "7602961685:AAElOZHbUTZO3h3P_CVPIID9H_jdWB4DYH4";
const TELEGRAM_API_URL = `https://api.telegram.org/bot${BOT_TOKEN}`;

// Middleware
app.use(bodyParser.json());
app.use(express.static("public"));

// Telegram Webhook Endpoint
app.post("/webhook", (req, res) => {
  const { message } = req.body;

  if (message && message.text) {
    const chatId = message.chat.id;
    const userText = message.text;

    // Respond to user
    axios
      .post(`${TELEGRAM_API_URL}/sendMessage`, {
        chat_id: chatId,
        text: `You said: ${userText}`,
      })
      .then(() => res.sendStatus(200))
      .catch((err) => {
        console.error("Error sending message:", err);
        res.sendStatus(500);
      });
  } else {
    res.sendStatus(200);
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
