const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); 
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
require('dotenv').config();

const app = express();
app.use(cors({
  origin: 'http://localhost:3000' 
}));

app.use(express.json());

// Database Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((error) => console.error('MongoDB connection error:', error));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

// Start Server
const PORT = process.env.PORT || 7001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Server running on http://localhost:${PORT}`);
});
