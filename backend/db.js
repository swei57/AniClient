require('dotenv').config();
const mysql = require('mysql');
var connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME
});

function connectDb() {
    connection.connect((err) => {
        if(err) throw err;
        else{
            console.log('Connected to database.');
        }
    });
    return connection;
}

// connection.connect((err) => {
//     if(err) throw err;
//     connection.query("SELECT * FROM users", (err, results, fields) =>{
//         if(err) throw err;
//         console.log(results);
//         console.log(results[0]);
//         console.log(results[0].username);
//         console.log(results[0].id);
//     });
// });

module.exports = connectDb();