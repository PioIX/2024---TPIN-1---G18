const express = require('express');						// Para el manejo del web server
const bodyParser = require('body-parser'); 				// Para el manejo de los strings JSON
const MySQL = require('./modulos/mysql');				// Añado el archivo mysql.js presente en la carpeta módulos
const session = require('express-session');				// Para el manejo de las variables de sesión
const cors = require("cors");

const app = express();									// Inicializo express para el manejo de las peticiones

app.use(bodyParser.urlencoded({ extended: false }));	// Inicializo el parser JSON
app.use(bodyParser.json());
app.use(cors());

const LISTEN_PORT = 4000;								// Puerto por el que estoy ejecutando la página Web

const server = app.listen(LISTEN_PORT, () => {
	console.log(`Servidor NodeJS corriendo en http://localhost:${LISTEN_PORT}/`);
});;

app.post('/login', async (req, res) => {
	let usuario;
	console.log("Recibi: ", req.body);

	usuario = await MySQL.realizarQuery(`SELECT UserId FROM Users WHERE Username='${req.body.username}' AND Password='${req.body.password}';`);
	if (usuario.length != 0) {
		console.log(usuario);
		res.send(usuario)
	} else {
		res.send([]);
	}
});

app.post('/register', async (req, res) => {
	let usuario;
	console.log("Recibi: ", req.body);

	usuario = await MySQL.realizarQuery(`INSERT INTO Users (Username, Password) VALUES ('${req.body.username}', '${req.body.password}');`);
	if (usuario.length != 0) {
		console.log(usuario);
		res.send(usuario)
	} else {
		res.send([]);
	}
});

app.post('/checkGuess', async (req, res) => {
	let guessedTeam;
	console.log("Recibi: ", req.body);
	guessedTeam = await MySQL.realizarQuery(`SELECT teamId FROM Teams WHERE Name = '${req.body.userGuess}';`);
	if (guessedTeam.length != 0) {
		console.log(guessedTeam);
		res.send(guessedTeam)
	} else {
		res.send([]); 
	}
})
