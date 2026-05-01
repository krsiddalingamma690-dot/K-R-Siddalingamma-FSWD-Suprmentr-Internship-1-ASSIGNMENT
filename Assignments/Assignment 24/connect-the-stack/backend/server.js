const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const authMiddleware = require('./middleware/authMiddleware');
const roleMiddleware = require('./middleware/roleMiddleware');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('DB Error:', err));

app.use('/api/auth', require('./routes/authRoutes'));

// Any logged in user
app.get('/api/profile', authMiddleware, (req, res) => {
  res.json({
    message: `Welcome ${req.user.name}!`,
    user: req.user
  });
});

// User and admin
app.get('/api/dashboard', authMiddleware,
  roleMiddleware('user', 'admin'), (req, res) => {
  res.json({
    message: 'Welcome to Dashboard!',
    user: req.user
  });
});

// Admin only
app.get('/api/admin', authMiddleware,
  roleMiddleware('admin'), (req, res) => {
  res.json({
    message: 'Welcome Admin! Full access granted.',
    user: req.user
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Backend running on port ${process.env.PORT}`);
});