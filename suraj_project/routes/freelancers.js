const express = require('express');
const Freelancer = require('../models/Freelancer');
const router = express.Router();

router.post('/register', async (req, res) => {
  try {
    const freelancer = new Freelancer(req.body);
    await freelancer.save();
    res.status(201).json({ message: "Freelancer registered successfully!" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
