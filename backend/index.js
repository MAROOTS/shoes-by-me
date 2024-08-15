const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const productRoutes = require('../backend/routes/productRoutes.jsx');
const app = express();

app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/matayo').then(() => console.log('connected to MongoDB')).catch(err => console.log('unsuccessful',err));

app.use('/api/products',productRoutes)
app.listen(3000, () => console.log('listening on port 3000'));



