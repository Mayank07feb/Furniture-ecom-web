const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  // Extract token from the x-auth-token header
  const token = req.header('x-auth-token');
  console.log('Received Token:', token); // Log the received token

  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  try {
    // Verify the token using the secret key
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log('Decoded Token:', decoded); // Log the decoded token

    // Attach user information to the request object
    req.user = decoded.user;
    next();
  } catch (err) {
    console.error('Token Verification Error:', err); // Log error details
    res.status(401).json({ message: 'Token is not valid' });
  }
};

module.exports = authMiddleware;
