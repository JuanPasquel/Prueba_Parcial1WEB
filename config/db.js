const mysql = require('mysql2');
require('dotenv').config();

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

pool.getConnection((err) => {
    err ? console.log(`Conexión fallida a la base de datos: ${err}`) : console.log('Conexión exitosa a la base de datos.');
});

module.exports = pool.promise();