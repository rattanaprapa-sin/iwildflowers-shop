const swaggerJSDoc = require('swagger-jsdoc');
const config = require('./index');

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Template API',
    version: '1.0.0',
    description: 'API Documentation for Template Project',
  },
  servers: [
    {
      url: `http://localhost:${config.port}/api`,
      description: 'Development server',
    },
  ],
};

const options = {
  swaggerDefinition,
  // ระบุ path ที่เก็บไฟล์ route เพื่อให้ swagger ไปอ่าน comment
  apis: ['./backend/modules/*/routes/*.js'], 
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
