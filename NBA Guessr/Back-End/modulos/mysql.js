const mysql = require('mysql2');

const db = mysql.createConnection({
    host: '181.47.29.35',
    user: '2024-5BINF-G09',
    password: 'y0g44l4m4n3c3r911',
    database: 'NBA Guessr'
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
});

module.exports = db;