const express  = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const authMiddleware = require('./middleware/authMiddleware');

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'));

app.use('/api/auth', require('./routes/authRoutes'));

// Protected test route
app.get('/api/profile', authMiddleware, (req, res) => {
  res.json({ message: 'Welcome! You are authenticated', user: req.user });
});

app.listen(process.env.PORT, () =>
  console.log(`Server on port ${process.env.PORT}`)
);