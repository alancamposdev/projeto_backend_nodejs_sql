const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import connect database
const conn = require('./models/database');
const Roles = require('./models/Roles');
const Users = require('./models/Users');
const Courses = require('./models/Courses');

Users.belongsTo(Roles, { foreignKey: 'role_id' });

conn.sync({ force: false })
.then(() => {
    console.log('Conectado ao banco de dados!');
})
.catch((err) => {
    console.error('Error sync' + err);
});


// Import routes
const coursesRoutes = require('./routes/coursesRoutes');
app.use('/cursos' , coursesRoutes);



app.get('/', (req, res) => {
    res.send('Page Home!');
   });

module.exports = app;