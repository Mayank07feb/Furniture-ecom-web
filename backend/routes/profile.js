const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const User = require('../models/User'); // Replace with your user model

// Get user profile
router.get('/', authMiddleware, async (req, res) => {
  try {
    const userId = req.user.id; // From auth middleware
    const user = await User.findById(userId); // Replace with your user model
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Update user profile
router.put('/', authMiddleware, async (req, res) => {
  try {
    const userId = req.user.id; // From auth middleware
    const updatedUser = await User.findByIdAndUpdate(userId, req.body, { new: true }); // Replace with your user model
    if (!updatedUser) return res.status(404).json({ message: 'User not found' });
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
