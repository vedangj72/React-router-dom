const express = require('express');
const mysql = require('mysql2');

const app = express();

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Remove the hostname from the user
    password: '',
    database: 'logdb'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database');
});

app.get('/users', (req, res) => {
    db.query('SELECT usename FROM details', (err, results) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json({ error: 'Internal server error' });
        }
        res.json({ username: results });
    });
});


const PORT = process.env.PORT || 3308;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});