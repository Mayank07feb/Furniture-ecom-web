const express = require('express');
const { forgotPassword, resetPassword } = require('../controllers/password');
const router = express.Router();

// Forgot password
router.post('/forgot-password', forgotPassword);

// Reset password
router.put('/reset-password/:token', resetPassword);

module.exports = router;
