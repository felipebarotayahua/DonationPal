const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;

router.get('/', (req, res) => {
    res.send('Root API route'); 
});

router.post('/register', passport.authenticate('register', {session: false}), async (req, res) => {
    res.status(200).json({
        message: 'Registration successful',
        user: req.user
    });
});

router.post('/login', 
            // Passport middleware
            passport.authenticate('login', { session: false, failWithError: true}),
            // If we find a user, we will land here
            function (req, res) {
                console.log(req.user);
                // CREATE A PAYLOAD (the middle part of the token)
                const payload = { id: req.user._id, email: req.user.email } // DO NOT put a password in here.
                // CREATE A TOKEN
                // The jwt.sign() method takes three elements: the payload, the encryption key, and a set of options
                // We can set our token to expire for security reasons by setting the 'expiresIn' option
                // 'expiresIn' takes a statement that converts a human-readable time to milliseconds: https://github.com/vercel/ms
                const token = jwt.sign( { payload }, process.env.TOP_SECRET_KEY, { expiresIn: '1d'});
                // Create an object that includes user information for the client AND the token
                loginObject = {};
                loginObject._id = req.user._id;
                loginObject.email = req.user.email;
                loginObject.accessToken = token;
                console.log(loginObject);
                return res.status(200).json(loginObject);
            },
            // If we do not find a user, we will land here
            function (err, req, res) {
                errorResponse = {
                    "error": {
                        "name": "LoginError"
                    },
                    "message": "User not found",
                    "statusCode": 401,
                    "data": [],
                    "success": false
                }
                return res.status(401).json(errorResponse);
            }
)

router.get('/me', passport.authenticate('jwt', {session: false}), (req, res) => {
    // If a valid jwt is passed in the Authorization header, the middleware will add a "user" object to the request
    // We can then use the req.user object to find the ID or email of the user sending the token
    // From there I could query the database and respond with the entire user's profile
    // For now I will just return the entire user object
    res.status(200).json(req.user);
});

module.exports = router;