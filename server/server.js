const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()

// Middleware
app.use(cors())
app.use(express.json())

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected successfully')
  })
  .catch((error) => {
    console.error('MongoDB connection failed:')
    console.error(error)
  })

// Test route
app.get('/', (req, res) => {
  res.json({
    message: 'Portfolio backend is running!'
  })
})

// Server port
const PORT = 5000

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})