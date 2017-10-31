require('dotenv').config();

var express = require('express');
var app = express();
var hikerRouter = require('./config/routes.js');
var auth = require('./config/auth.js');
var session = require('express-session')
var passport = require('passport');
var Strategy = require('passport-http').BasicStrategy;
var LocalStrategy = require('passport-local').Strategy;



 app.use(session({ 
        secret: 'some-secret',
        saveUninitialized: false,
        resave: true
    }));
 
 app.use(auth.initialize());
 app.use(auth.session());

app.get('/api/login')
app.post('/api/login', auth.authenticate('login', {
            successRedirect: '/api/login',
            failureRedirect: '/user/59f50039d27c8c5f51a0da28'
            
        }))



app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE");
  next();
});

var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(hikerRouter);

let port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log(`Listening on port ${ port }`);
});