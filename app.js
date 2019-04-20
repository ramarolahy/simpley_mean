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

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(logger('dev'));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session( {secret: process.env.SESSION_SECRET, resave: true, saveUninitialized: true}));
app.use(flash());
app.use(express.static(path.join(__dirname, 'public')));

// Routers
const indexRouter = require('./routes/index');
const loginRouter = require( './routes/authentication/login');
const signupRouter = require( './routes/authentication/signup');
const logoutRouter = require( './routes/authentication/logout');
const userRouter    = require('./routes/user/user');
const todayRouter = require('./routes/today');
const todoApiRouter = require('./routes/api/todo_api');

// Route Middlewares
app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/signup', signupRouter);
app.use('/logout', logoutRouter);
app.use('/user', userRouter);
app.use('/today', todayRouter);
app.use('/api/today', todoApiRouter);

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
