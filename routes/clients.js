const express = require('express');
const Client = require('../models/Client');
const router = express.Router();

router.post('/inquire', async (req, res) => {
  try {
    const { name, email, category, phone, country, projectDesc, projectTodo } = req.body;
    
    // Process projectTodo into an array if provided
    let todoList = [];
    if (projectTodo) {
      todoList = projectTodo.split('\n').map(task => task.trim()).filter(task => task.length > 0);
    }
    
    const clientData = {
      name,
      email,
      category,
      phone,
      country,
      projectDesc,
      projectTodo: todoList // Store as an array of tasks
    };
    
    const client = new Client(clientData);
    await client.save();
    res.status(201).json({ message: "Client inquiry submitted successfully!" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
