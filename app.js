require('dotenv').config();
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bodyParser = require ('body-parser');
const cors = require('cors');
const flash = require('flash');
const logger = require('morgan');

//Local
const {mongoose} = require('./db/mongoose');

const app = express();

app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session( {secret: process.env.SESSION_SECRET, resave: true, saveUninitialized: true}));
app.use(flash());

app.use(express.static(path.join(__dirname, 'public')));

// Routers
const todoAPIRouter = require('./routes/api/todo_api');
const userAPIRouter = require('./routes/api/user_api');

// API routes Middlewares
app.use('/api', todoAPIRouter);
app.use('/api', userAPIRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
