const express = require('express');
const cors = require('cors');
require('dotenv').config();

const { sendContactEmail } = require('./utils/mailer');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: [
    'http://localhost:5173',
    'http://localhost:3000',
    'https://portfolio-ajay-eight.vercel.app',
    process.env.FRONTEND_URL
  ].filter(Boolean),
  methods: ['GET', 'POST'],
  credentials: true
}));
app.use(express.json());

// Health check
app.get('/', (_req, res) => {
  res.json({
    status: 'ok',
    message: 'Portfolio Backend API is running',
    endpoints: {
      health: '/api/health',
      contact: 'POST /api/contact'
    }
  });
});

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  // Validation
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      error: 'Name, email and message are required'
    });
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      error: 'Invalid email address'
    });
  }

  try {
    await sendContactEmail({ name, email, subject, message });

    res.json({
      success: true,
      message: 'Email sent successfully!'
    });

  } catch (error) {
    console.error('Email error:', error.message);
    res.status(500).json({
      success: false,
      error: 'Failed to send email. Please try again later.'
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
