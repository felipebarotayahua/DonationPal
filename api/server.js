require('dotenv').config();
require('app-module-path').addPath(__dirname);

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose')
const cors = require('cors')
const passport = require('passport');

//Routers
const apiRouter = require('./routes/api/v1')
const usersRouter = require('./routes/api/v1/users')
//App initialization
const app = express();


// Passport initialization
// Makes passport available throughout the app
require('./config/passport');
//connect to mongo via mongoose
mongoose.set('strictQuery',false)
mongoose.connect(process.env.MONGO_CONNECTION_STRING, {
  useUnifiedTopology: true,
  useNewUrlParser: true
})
.then(()=> console.log("MongoDB Connected"))
.catch(err=> console.log(err));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

// Middleware to initialize Passport
app.use(passport.initialize());

// link to routes
// app.use('/', indexRouter);
app.use('/api/v1', apiRouter)
app.use('/api/v1/users', usersRouter);

module.exports = app;
