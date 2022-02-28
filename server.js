const express = require('express');
const connectDB = require('./config/db');
//our application
const app= express();

// Connect Database
connectDB();

//application level Middleware
app.use(express.json({ extended: false })); // it allows us to get data from user.js (req.body)

app.get('/', (req, res) => res.send('API Running'));

// Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

const PORT = process.env.PORT || 5000;
//output
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
