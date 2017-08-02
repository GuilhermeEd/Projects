var express = require('express');
var router = express.Router();
var variables = require('../server_config/variables')
var mongoose = require('mongoose');
var User = require('../server_config/models/user.js');

// USE THIS TO CONNECT TO THE MONGODB DATABASE
// const {user, pass, host, port, name} = variables.db;
// mongoose.connect(`mongodb://${user}:${pass}@${host}:${port}/${name}`);

router.post('/api/login', function (req, res, next) {
    res.status(200).json(JSON.stringify(req.body));
});

router.post('/api/signup', function (req, res, next) {
    const {username, email, password} = req.body;
    const user = new User({username, email, password});
    user.save(function (err) {
        if(err) {
            console.log(err);
            return res.status(500).json(JSON.stringify({error: 'Erro ao tentar salvar usuário.'}))
        }
    });
    res.status(200).json(JSON.stringify(req.body));
});

router.get('/', function (req, res, next) {
    res.render('index');
});

module.exports = router;
