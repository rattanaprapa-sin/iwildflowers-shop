const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';

  console.error(`[Error] ${statusCode} - ${message}\n`, err.stack);

  res.status(statusCode).json({
    success: false,
    message,
    // ส่ง stack trace กลับไปเฉพาะตอนอยู่ในโหมด development
    stack: process.env.NODE_ENV === 'development' ? err.stack : undefined,
  });
};

const notFoundHandler = (req, res, next) => {
  res.status(404).json({
    success: false,
    message: `API Route Not Found: ${req.originalUrl}`,
  });
};

module.exports = {
  errorHandler,
  notFoundHandler,
};
