require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const PORT = 8080;

// Local modules
const user = require('./routes/user'); // user route - handles login and registration

// General app setup
var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
// app.use('*', cors);

// Run the express app.
app.use('/users', user); // attach the user Router to this route.

app.listen(PORT, () => console.log(`Listening now at ${PORT}`));