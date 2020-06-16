var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

//********* criar variável com a rota *********
const ficha = require('./routes/ficha');
const icone = require('./routes/icone');
const livro = require('./routes/livro');
const mapa = require('./routes/mapa');
const usuario = require('./routes/usuario');


//********* Views *********
//const livro = require('./routes/livro');
//const mapa = require('./routes/mapa');

var app = express();

//database mongo online
var dotenv = require('dotenv').config();

const database = require('./config/database');
database(process.env.MONGOLAB_URI);

const cors = require('cors');
app.use(cors());

// view engine setup
app.set('view engine', 'ejs');
app.set('views', './views');



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('./public'));

//********* adicionar variável na rota aqui *********
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/ficha', ficha);
app.use('/icone', icone);
app.use('/livro', livro);
app.use('/mapa', mapa);
app.use('/usuario', usuario);


//********* Views *********
//app.use('/livro', livro);
//app.use('/mapa', mapa);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
