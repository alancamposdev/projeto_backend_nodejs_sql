//connect to database com MariaDB

/**************************************
const mariadb = require('mariadb');
require('dotenv').config();

const pool = mariadb.createPool({
    host:     process.env.DB_HOST,
    user:     process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_NAME,
    connectionLimit: 100
});
let conn;

module.exports = pool;
**************************************/

// connect to database com Sequelize

const {Sequelize} = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PWD,
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: 'mariadb'                
    }
);

try{
    sequelize.authenticate();
    console.log('Connection successfully.');
}
catch(error){
    console.error('Connection error:', error);
}

module.exports = sequelize;



