var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var logger = require('morgan');
var createError = require('http-errors');

var userRouter = require('./src/routes/user');

var app = express();
var middleware = require('./src/middleware/user');
require('dotenv').config();
const port = 3000;
var cors = require('cors')

mongoose.connect(process.env.DB_URL, {useUnifiedTopology: true, useNewUrlParser: true});

app.use(cors());

app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit: 50000}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/user', middleware, userRouter);
app.use(function (req, res, next) {
    next(createError(404));
});
app.listen(port);
module.exports = app;
