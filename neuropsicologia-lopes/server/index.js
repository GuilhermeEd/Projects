var express = require('express');
var app = express();
var mongoose = require('mongoose');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var path = require('path');
var favicon = require('serve-favicon');
var router = require('./routes/router');
var variables = require('./server_config/variables')

// USE THIS TO CONNECT TO THE MONGODB DATABASE
// const {user, pass, host, port, name} = variables.db;
// const dburl = `mongodb://${user}:${pass}@${host}:${port}/${name}`
const dburl = 'localhost:27017/db';
mongoose.connect(dburl)

app.set('port', (process.env.PORT || variables.provider.port));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(__dirname + '/../client/public'));
app.use(favicon(path.join(__dirname, '/../client/public', 'favicon.ico')));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
    next();
});

app.use('/', router);
app.use(function (req, res, next) {
    return res.render('index');
});


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});