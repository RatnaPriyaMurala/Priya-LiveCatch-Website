require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Middleware
app.use(cors());
app.use(bodyParser.json());
connectDB();

// ✅ Environment Variables
const WHATSAPP_TOKEN = process.env.WHATSAPP_TOKEN;
const PHONE_NUMBER_ID = process.env.WHATSAPP_PHONE_NUMBER_ID;
const OWNER_NUMBER = process.env.WHATSAPP_OWNER_NUMBER;

// ✅ In-Memory OTP Store (you can replace with DB later)
const otpStore = {};

app.post('/send-otp', async (req, res) => {
  const { phoneNumber, otp } = req.body;
  console.log("📨 Sending OTP to:", phoneNumber);
  console.log("🔢 OTP:", otp);

  // ... rest of the code


  try {
    const response = await axios.post(
      `https://graph.facebook.com/v19.0/${PHONE_NUMBER_ID}/messages`,
      {
        messaging_product: 'whatsapp',
        to: `+91${phone}`,
        type: 'text',
        text: { body: `🧾 Your OTP is: *${otp}*` },
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${WHATSAPP_TOKEN}`,
        },
      }
    );

    res.json({ success: true, message: 'OTP sent via WhatsApp!' });
  } catch (error) {
    console.error('❌ WhatsApp OTP Error:', error.response?.data || error.message);
    res.status(500).json({ success: false, error: 'Failed to send OTP' });
  }
});

// ✅ Verify OTP Route
app.post('/verify-otp', (req, res) => {
  const { phone, otp } = req.body;
  const validOtp = otpStore[phone];

  if (validOtp && Number(otp) === Number(validOtp)) {
    delete otpStore[phone]; // clear OTP after success
    return res.json({ success: true, message: 'OTP verified ✅' });
  } else {
    return res.status(400).json({ success: false, message: 'Invalid OTP ❌' });
  }
});

// ✅ Send Order Route
app.post('/send-order', async (req, res) => {
  const { orderMessage, customerPhone } = req.body;

  try {
    // Send to customer
    await axios.post(
      `https://graph.facebook.com/v19.0/${PHONE_NUMBER_ID}/messages`,
      {
        messaging_product: 'whatsapp',
        to: customerPhone,
        type: 'text',
        text: { body: orderMessage },
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${WHATSAPP_TOKEN}`,
        },
      }
    );

    // Send to owner
    await axios.post(
      `https://graph.facebook.com/v19.0/${PHONE_NUMBER_ID}/messages`,
      {
        messaging_product: 'whatsapp',
        to: OWNER_NUMBER,
        type: 'text',
        text: { body: `📦 New Order Received:\n${orderMessage}` },
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${WHATSAPP_TOKEN}`,
        },
      }
    );

    res.json({ success: true, message: 'Order sent to customer and owner' });
  } catch (err) {
    console.error('❌ WhatsApp Send Error:', err.response?.data || err.message);
    res.status(500).json({ success: false, error: 'Failed to send WhatsApp messages' });
  }
});

// ✅ Test Route
app.get('/', (req, res) => {
  res.send('✅ WhatsApp Cloud API backend is running');
});

// ✅ Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
