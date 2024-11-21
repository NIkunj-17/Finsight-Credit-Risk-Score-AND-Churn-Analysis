// middlewares/authMiddleware.js
const jwt = require('jsonwebtoken');
require('dotenv').config();

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization && req.headers.authorization.split(' ')[1];

  if (!token) {
    console.log("No token provided");
    return res.status(401).json({ error: 'Access denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Attach user data to request
    console.log("Decoded User:", req.user); // Debugging
    next(); // Proceed to the next middleware
  } catch (error) {
    console.error("Invalid Token:", error.message); // Debugging
    res.status(403).json({ error: 'Invalid token.' });
  }
};

module.exports = { verifyToken };
