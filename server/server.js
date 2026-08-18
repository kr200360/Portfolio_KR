const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()

// Middleware
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:3000', 'http://127.0.0.1:5173'],
  credentials: true
}))
app.use(express.json())

// Mongoose Schema for Messages
const messageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    maxlength: 100
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email address']
  },
  subject: {
    type: String,
    trim: true,
    maxlength: 150,
    default: 'New Inquiry from Portfolio'
  },
  message: {
    type: String,
    required: [true, 'Message content is required'],
    trim: true,
    maxlength: 3000
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

const Message = mongoose.model('Message', messageSchema)

// Connect to MongoDB
let isDbConnected = false
if (process.env.MONGO_URI) {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      isDbConnected = true
      console.log('✅ MongoDB connected successfully')
    })
    .catch((error) => {
      console.error('❌ MongoDB connection failed:', error.message)
    })
} else {
  console.warn('⚠️ MONGO_URI not configured in .env')
}

// Health check route
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    databaseConnected: mongoose.connection.readyState === 1,
    timestamp: new Date().toISOString()
  })
})

// Test root route
app.get('/', (req, res) => {
  res.json({
    message: 'Portfolio backend is running successfully!',
    endpoints: {
      health: 'GET /api/health',
      contact: 'POST /api/contact',
      messages: 'GET /api/contact'
    }
  })
})

// Contact Form API - Submit new message
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: 'Please provide name, email, and message.'
      })
    }

    // Save message to MongoDB if connected
    if (mongoose.connection.readyState === 1) {
      const newMessage = new Message({
        name,
        email,
        subject: subject || 'Portfolio Contact',
        message
      })
      await newMessage.save()
      console.log(`📩 New message received from ${name} (${email})`)
    } else {
      console.log(`📩 Message received (DB offline): ${name} (${email}): ${message}`)
    }

    return res.status(200).json({
      success: true,
      message: 'Thank you! Your message has been sent successfully. I will get back to you soon.'
    })
  } catch (error) {
    console.error('Error processing contact message:', error)
    return res.status(500).json({
      success: false,
      error: 'An error occurred while sending your message. Please try again later.'
    })
  }
})

// Get messages endpoint (for admin review)
app.get('/api/contact', async (req, res) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      return res.status(503).json({
        success: false,
        error: 'Database is currently not connected.'
      })
    }
    const messages = await Message.find().sort({ createdAt: -1 }).limit(50)
    res.json({
      success: true,
      count: messages.length,
      data: messages
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    })
  }
})

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({ success: false, error: 'Internal Server Error' })
})

// Server port
const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`)
})