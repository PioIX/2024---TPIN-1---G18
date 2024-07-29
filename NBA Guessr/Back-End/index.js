var express = require('express'); //Tipo de servidor: Express
var bodyParser = require('body-parser'); //Convierte los JSON
var cors = require('cors');

var app = express(); //Inicializo express
var port = process.env.PORT || 3000; //Ejecuto el servidor en el puerto 3000

// Convierte una petición recibida (POST-GET...) a objeto JSON
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());

app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const query = 'SELECT * FROM Users WHERE Username = ?';
        const results = await realizarQuery(query, [username]);

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
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error });
    }
});

app.post('/register', async (req, res) => {
    const { username, password } = req.body;

    try {
        // Verificar si el nombre de usuario ya existe
        const queryCheck = 'SELECT * FROM Users WHERE Username = ?';
        const resultsCheck = await realizarQuery(queryCheck, [username]);

        if (resultsCheck.length > 0) {
            res.status(409).json({ message: 'Username already exists' });
        } else {
            // Insertar el nuevo usuario
            const queryInsert = 'INSERT INTO Users (Username, Password) VALUES (?, ?)';
            await realizarQuery(queryInsert, [username, password]);
            res.json({ message: 'Registration successful', username: username });
        }
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error });
    }
});


app.post('/check-guess', async (req, res) => {
    const { team_name, user_guess } = req.body;

    try {
        const query = 'SELECT Name FROM Teams WHERE Name = ?';
        const results = await realizarQuery(query, [team_name]);

        if (results.length > 0 && results[0].Name.toUpperCase() === user_guess.toUpperCase()) {
            res.json({ correct: true });
        } else {
            res.json({ correct: false });
        }
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error });
    }
});


app.post('/check-player-guess', async (req, res) => {
    const { player_name, user_player_guess } = req.body;

    try {
        const query = 'SELECT Name FROM TopScorers WHERE Name = ?';
        const results = await realizarQuery(query, [player_name]);

        if (results.length > 0 && results[0].Name.toUpperCase() === user_player_guess.toUpperCase()) {
            res.json({ correct: true });
        } else {
            res.json({ correct: false });
        }
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error });
    }
});

//Pongo el servidor a escuchar
app.listen(port, function(){
    console.log(`Server running in http://localhost:${port}`);
    console.log('Defined routes:');
    console.log('   [POST] http://localhost:3000/login');
    console.log('   [POST] http://localhost:3000/register');
    console.log('   [POST] http://localhost:3000/check-guess');
    console.log('   [POST] http://localhost:3000/check-player-guess');
});
