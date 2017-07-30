var express = require('express');
var router = express.Router();
var variables = require('../server_config/variables')
var mongoose = require('mongoose');

// USE THIS TO CONNECT TO THE MONGODB DATABASE
// const {user, pass, host, port, name} = variables.db;
// mongoose.connect(`mongodb://${user}:${pass}@${host}:${port}/${name}`);

router.post('/login', function (req, res, next) {
    res.status(200).json(JSON.stringify(req.body));
});

router.get('/', function (req, res, next) {
    res.render('index');
});

module.exports = router;
