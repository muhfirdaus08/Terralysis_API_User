require('dotenv').config();
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//const index = require('./routes/index.js');
const user = require('./routes/users.js');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/routes/home.html');
});

app.use(user.register);
app.use(user.login);
app.use(user.getAllUser);
app.use(user.getUserById);
app.use(user.updateUserById);
app.use(user.deleteUserById);
app.use(user.logout);

module.exports = app;
