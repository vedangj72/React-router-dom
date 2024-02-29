// db.js
const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost', // Replace with your MySQL server's host
    user: 'username', // Replace with your MySQL username
    password: '', // Replace with your MySQL password
    database: 'logdb' // Replace with the name of your MySQL database
});

module.exports = db;