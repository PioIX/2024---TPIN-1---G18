const mysql = require('mysql2');

const db = mysql.createConnection({
    //host: '181.47.29.35',
    host: '10.1.5.205',
    user: '2024-5BINF-G09',
    password: 'y0g44l4m4n3c3r911',
    database: '2024-5BINF-G09'
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
});

module.exports = db;