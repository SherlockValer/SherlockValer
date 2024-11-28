const express = require('express');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3000;

// Telegram Bot token from BotFather
const TELEGRAM_BOT_TOKEN = '7602961685:AAElOZHbUTZO3h3P_CVPIID9H_jdWB4DYH4';
const TELEGRAM_API_URL = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

// Sample endpoint to send a message to a specific chat
app.get('/send-message', async (req, res) => {
  const { chat_id, text } = req.query;

  if (!chat_id || !text) {
    return res.status(400).json({ error: 'chat_id and text are required' });
  }

  try {
    const response = await axios.post(TELEGRAM_API_URL, {
      chat_id,
      text,
    });
    return res.json(response.data);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error sending message' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
