var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var database=require("./config/database");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var vendedoresRouter= require('./routes/vendedores.router');
var inmueblesRouter = require('./routes/inmuebles.router');
var clientesRouter=require('./routes/clientes.router');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Mongo connection
database.mongoConnect();
//Router

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/vendedores', vendedoresRouter);
app.use('/inmuebles', inmueblesRouter);
app.use('/clientes', clientesRouter);

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
