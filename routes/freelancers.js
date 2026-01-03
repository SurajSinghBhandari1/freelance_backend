const express = require('express');
const Freelancer = require('../models/Freelancer');
const router = express.Router();

router.post('/register', async (req, res) => {
  try {
    const { name, email, category, phone, country, projectDesc, projectTodo } = req.body;
    
    // Process projectTodo into an array if provided (assuming freelancers might list skills or tasks)
    let todoList = [];
    if (projectTodo) {
      todoList = projectTodo.split('\n').map(task => task.trim()).filter(task => task.length > 0);
    }
    
    const freelancerData = {
      name,
      email,
      category,
      phone,
      country,
      projectDesc, // Assuming this is a description of services or portfolio
      projectTodo: todoList // Store as an array of tasks or skills
    };
    
    const freelancer = new Freelancer(freelancerData);
    await freelancer.save();
    res.status(201).json({ message: "Freelancer registered successfully!" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
