const express = require('express');
const cors = require('cors');
const { errorHandler, notFoundHandler } = require('./middlewares/errorHandler');

const app = express();

app.use(cors());
app.use(express.json());

// ตัวอย่าง Route พื้นฐาน
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'API is running on Vercel!' });
});

// นำเข้า Routes จาก Modules
const featureRoutes = require('./modules/featureName/routes/featureRoutes');
app.use('/api/features', featureRoutes);


// Fallback เมื่อเรียก API ที่ไม่มีอยู่จริง (404)
app.use('/api', notFoundHandler);

// Global Error Handler (ต้องอยู่บรรทัดสุดท้ายก่อน export เสมอ)
app.use(errorHandler);

// ส่งออก app ไปให้ api/index.js (Vercel) หรือ server.js ใช้งานต่อ
module.exports = app;
