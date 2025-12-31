const mongoose = require('mongoose');

const freelancerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  category: { type: String, required: true },
  phone: { type: String, required: true },
  country: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Freelancer', freelancerSchema);