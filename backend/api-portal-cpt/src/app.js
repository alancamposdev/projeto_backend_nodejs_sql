const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const cors = require('cors');
app.use(cors());

// Importando o banco de dados "Sequelize"
const conn = require('./models/database');

// Importando os modelos
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

// Importando as rotas
app.use('/cursos'   , require('./routes/coursesRoutes'));
app.use('/usuarios' , require('./routes/usersRoutes'));
app.use('/funcoes'  , require('./routes/rolesRoutes'));


// Importando o servidor
require('./server')(app);