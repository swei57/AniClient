// Route to handle login and registration logic
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser'); // body parser.
const jwt = require('jsonwebtoken'); // json web tokens to maintain session information for now.
const bcrypt = require('bcrypt'); // bcrypt for one-way hashing that is brute-force resistant.
const validator = require('validator'); // string validators and sanitizers - check email format, etc.

const SECRET_KEY = process.env.JWT_SECRETKEY;
const saltRounds = 10; // amount of rounds to use for bcrypt salting

// reference to database connection
const db = require('./../db');

const Router = express.Router();
Router.use(bodyParser.urlencoded({extended: true}));
Router.use(bodyParser.json());

// Login route
Router.post('/login', (req, res) => {
    // first thing we should do is authenticate the user with our database
    // Then when we have that user, we can create a Bearer token for the session.
    var username = req.body.username;
    var password = req.body.password;

    console.log(`Signing in with credentials ${username} ${password}.`);

    // Query the database to find the username/password entry
    const query=`SELECT * FROM users WHERE username='${username}'`;
    db.query(query, (err, results, fields) => {
        console.log(results);
        if(!results || results.length === 0)
        {
            // return no such user.
            res.json({failure: 'No such user!'});
        } else {
            // found one - check if the password matches the hashed version.
            let user = JSON.parse(JSON.stringify(results[0]));

            //bcrypt.compareSync(password, user.password -- use when passwords are being hashed.
            if(bcrypt.compareSync(password, user.password)){
                // Correct password
                console.log('User signed in.');
                res.json({success: 'These credentials work!'}); // TEST
                // var token = jwt.sign({thisUser}, 'secretkey', {expiresIn: "45m"}); // sessions last 45 minutes by default.
                // res.json({message: token, auth: thisUser.authLevel, email: thisUser.email});
            } else {
                // incorrect password
                console.log('User entered wrong password');
                res.json({failure: 'These credentials do not work!'}); // TEST
            }
        }
    });
});

// Signup/Registration route
Router.post('/signup', (req, res) => {
    var username = req.body.username;
    var password = req.body.password;

    // First check the database to see if this username is taken
    const checkQuery = `SELECT * FROM users WHERE username='${username}'`;
    db.query(checkQuery, (err, results, fields) => {
        if(err) throw err;

        if(!results || results.length == 0){

            // That account doesn't exist -- create it
            var encryptedPassword = bcrypt.hashSync(password, saltRounds); // hash the password
            const createQuery = `INSERT INTO users (username, password) VALUES('${username}', '${encryptedPassword}')`;
            db.query(createQuery, (err, results, fields) => {
                if(err) throw err;
                console.log('User created and added to database');
                res.json({success: 'Account created'});
            });

        } else {

            console.log('User registration: Username already exists.');
            res.json({failure: 'Account with that username already exists'});
            
        }
    });
});

module.exports = Router;