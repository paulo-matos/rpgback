var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

//********* criar variável com a rota *********
const ficha = require('./routes/ficha');
const atributo = require('./routes/atributo');
const habilidade = require('./routes/habilidade');
const talento = require('./routes/talento');
const pericia = require('./routes/pericia');
const conhecimento = require('./routes/conhecimento');
const detalhe = require('./routes/detalhe');

//********* Views *********
const livro = require('./routes/livro');
const mapa = require('./routes/mapa');

var app = express();

const database = require('./config/database');
database('mongodb://localhost:27017/vampire_db');

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
app.use('/atributo', atributo);
app.use('/habilidade', habilidade);
app.use('/talento', talento);
app.use('/pericia', pericia);
app.use('/conhecimento', conhecimento);
app.use('/detalhe', detalhe);

//********* Views *********
app.use('/livro', livro);
app.use('/mapa', mapa);

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
