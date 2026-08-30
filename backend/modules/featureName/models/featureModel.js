const mongoose = require('mongoose');

// ตัวอย่าง Schema ของ Mongoose
const featureSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  isActive: {
    type: Boolean,
    default: true,
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Feature', featureSchema);
