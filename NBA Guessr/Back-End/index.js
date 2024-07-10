const express = require('express');
const app = express();
const port = 3000;
const mysql = require('mysql2');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'mydb'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database.');
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    const query = 'SELECT * FROM Users WHERE Username = ?';
    db.execute(query, [username], (err, results) => {
        if (err) throw err;

        if (results.length > 0) {
            const user = results[0];

            
            if (password === user.password) {
                res.json({ message: 'Login successful', username: user.username });
            } else {
                res.status(401).json({ message: 'Incorrect password' });
            }
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    });
});

app.post('/register', (req, res) => {
    const { username, password } = req.body;

    const queryCheck = 'SELECT * FROM Users WHERE Username = ?';
    db.execute(queryCheck, [username], (err, results) => {
        if (err) throw err;

        if (results.length > 0) {
            res.status(409).json({ message: 'Username already exists' });
        } else {
            const queryInsert = 'INSERT INTO Users (Username, Password) VALUES (?, ?)';
            db.execute(queryInsert, [username, password], (err, results) => {
                if (err) throw err;
                res.json({ message: 'Registration successful', username: username });
            });
        }
    });
});


app.post('/check-guess', (req, res) => {
    const { team_name, user_guess } = req.body;

    const query = 'SELECT Name FROM Teams WHERE Name = ?';
    db.query(query, [team_name], (err, result) => {
        if (err) throw err;
        if (result.length > 0 && result[0].team_name.toUpperCase() === user_guess) {
            res.json({ correct: true });
            //respuesta correcta agregar cambio a topscorer
        } else {
            res.json({ correct: false });
            //agregar pantalla de derrota
        }
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
