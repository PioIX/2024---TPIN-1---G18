const mySql = require('mysql2/promise');

const SQL_CONFIGURATION_DATA =
{
	//host: "10.1.5.205", //IP privada del servidor del colegio
	host: "181.47.29.35", //IP pública del servidor del colegio
	user: "2024-5BINF-G09",
	password: "y0g44l4m4n3c3r911",
	database: "2024-5BINF-G09",
	port: 3306,
	charset: 'UTF8_GENERAL_CI'
}

/**
 * Realiza una query a la base de datos MySQL indicada en el archivo "mysql.js".
 * @param {String} queryString Query que se desea realizar. Textual como se utilizaría en el MySQL Workbench.
 * @returns Respuesta de la base de datos. Suele ser un vector de objetos.
 */
exports.realizarQuery = async function (queryString)
{
	let returnObject;
	let connection;
	try
	{
		connection = await mySql.createConnection(SQL_CONFIGURATION_DATA);
		returnObject = await connection.execute(queryString);
	}
	catch(err)
	{
		console.log(err);
	}
	finally
	{
		if(connection && connection.end) connection.end();
	}
	return returnObject[0];
}