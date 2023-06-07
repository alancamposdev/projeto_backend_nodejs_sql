const express = require('express');
const app = express();
app.use(express.json());

// Import routes
const coursesRoutes = require('./routes/coursesRoutes');
app.use('/cursos' , coursesRoutes);



app.get('/', (req, res) => {
    res.send('Hello World!');
   });

module.exports = app;