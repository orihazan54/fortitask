const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['Student', 'Teacher'], default: 'Student' },
  permissions: { type: Array, default: [] },
});

module.exports = mongoose.model('User', userSchema);
