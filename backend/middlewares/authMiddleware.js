const jwt = require('jsonwebtoken');
const config = require('../config');

// ดึง secret จาก config/index.js แทนที่จะดึง process.env ตรงๆ
const JWT_SECRET = config.jwtSecret || 'your_super_secret_key_change_in_production';

const verifyToken = (req, res, next) => {
  const bearerHeader = req.headers['authorization'];

  if (!bearerHeader) {
    return res.status(403).json({ success: false, message: 'No token provided' });
  }

  try {
    const bearer = bearerHeader.split(' ');
    const token = bearer[1];
    
    // ตรวจสอบความถูกต้องของ Token
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded; // นำข้อมูล user ที่แกะได้ไปใช้งานต่อใน Controller
    next();
  } catch (error) {
    return res.status(401).json({ success: false, message: 'Invalid or Expired token' });
  }
};

const generateToken = (userData) => {
  return jwt.sign(userData, JWT_SECRET, { expiresIn: '24h' });
};

module.exports = {
  verifyToken,
  generateToken
};
