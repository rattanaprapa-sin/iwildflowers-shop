const app = require('../app');

// สำหรับ Vercel Serverless Function 
// เราจะส่งออก Express app ตรงๆ โดยไม่ต้อง app.listen
module.exports = app;
