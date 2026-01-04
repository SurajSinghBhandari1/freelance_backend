const express = require('express');
const Client = require('../models/Client');
const router = express.Router();

// POST /api/clients/inquire
router.post('/inquire', async (req, res) => {
  try {
    const { name, email, category, phone, country, projectDesc, projectTodo } = req.body;

    // Convert projectTodo to array if provided
    const todoList = projectTodo
      ? projectTodo.split('\n').map(t => t.trim()).filter(t => t.length > 0)
      : [];

    const clientData = {
      name,
      email,
      category,
      phone,
      country,
      projectDesc,
      projectTodo: todoList
    };

    const client = new Client(clientData);
    await client.save();

    res.status(201).json({ message: 'Client inquiry submitted successfully!' });
  } catch (err) {
    console.error('Error saving client inquiry:', err);
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
