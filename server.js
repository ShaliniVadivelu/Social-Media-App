const express = require('express');
// initialize express to app variable
const connectDB = require('./config/db');
const path = require ('path');
// declaring a variable app to access our app.
const app= express();

// Connect Database
connectDB();

//application level Middleware. req.body is populated when we use middleware called body parser such as express.json() or urlencoded()
// it allows us to get data from user.js (req.body)
app.use(express.json({ extended: false })); 

// app.get('/', (req, res) => res.send('API Running'));

// Define Routes                                                                                                                                                                                           
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder. Built in middleware
    app.use (express.static('client/build'));
    
    // used to send an response if none of the route match the request.
    app.get('*',(req, res) => {
        res.sendFile(path.resolve(__dirname,'client', 'build', 'index.html'));
    });
}
//process.env.PORT will look at the Port variable to run the server on corres. port
const PORT = process.env.PORT || 5000;
//output
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
