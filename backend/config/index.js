require('dotenv').config();

const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 4000,
  
  // ตัวอย่างการตั้งค่า Database
  // db: {
  //   uri: process.env.DATABASE_URL || 'mongodb://localhost:27017/template-db',
  // },
  
  // ตัวอย่างการตั้งค่า JWT Secret
  // jwtSecret: process.env.JWT_SECRET || 'your_super_secret_key',
};

module.exports = config;
