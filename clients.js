const express = require('express');
const Client = require('../models/Client');
const router = express.Router();

router.post('/inquire', async (req, res) => {
  try {
    const client = new Client(req.body);
    await client.save();
    res.status(201).json({ message: "Client inquiry submitted successfully!" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
