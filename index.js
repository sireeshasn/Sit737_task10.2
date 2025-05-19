const express = require('express');
const mongoose = require('mongoose');
const bookRoutes = require('./routes/books');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use('/books', bookRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(3000, () => console.log('Server running on port 3000'));
  })
  .catch(err => console.error(err));