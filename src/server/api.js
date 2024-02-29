const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');

const connectionString = 'mongodb://127.0.0.1:27017';
const app = express();

app.use(cors());

app.get('/get', (req, res) => {
    MongoClient.connect(connectionString, (err, client) => {
        if (err) {
            console.error('Error connecting to MongoDB:', err);
            res.status(500).json({ error: 'Failed to connect to the database' });
            return;
        }
        const database = client.db('Mydb');
        const collection = database.collection('Login');

        collection.find({}).toArray((err, docs) => {
            if (err) {
                console.error('Error querying the database:', err);
                res.status(500).json({ error: 'Failed to query the database' });
                return;
            }

            res.json(docs);
            console.log('Data sent to client:', docs);

            client.close();
        });
    });
});

app.listen(4000, () => {
    console.log('Server started on http://localhost:4000');
});