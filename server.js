const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const { router: authRoutes } = require('./routes/auth');
const freelancerRoutes = require('./routes/freelancers');
const clientRoutes = require('./routes/clients');


dotenv.config();
const app = express();

// Middleware
app.use(cors()); // Allow frontend requests
app.use(express.json()); // Parse JSON bodies

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));


// Routes
app.use('/api/auth', authRoutes); // Admin login
app.use('/api/freelancers', freelancerRoutes); // Freelancer registration
app.use('/api/clients', clientRoutes); // Client inquiries

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));