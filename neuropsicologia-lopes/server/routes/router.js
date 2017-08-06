var express = require('express');
var router = express.Router();
var variables = require('../server_config/variables')
var mongoose = require('mongoose');
var User = require('../server_config/models/user.js');
var bcrypt = require('bcryptjs');

router.post('/api/login', function (req, res, next) {
    res.status(200).json(JSON.stringify(req.body));
});

 const {user, pass, host, port, name} = variables.db;
 mongoose.connect(`mongodb://${user}:${pass}@${host}:${port}/${name}`); 
// ADD ROUTES THAT DEPENDS ON DATABASE CONNECTION DOWN HERE

router.post('/api/signup', function (req, res, next) {
    const {firstName, lastName, email, password} = req.body;
    const user = new User({firstName, lastName: lastName, email, password: bcrypt.hashSync(password, 10)});
    User.findOne({email}, function(err, userFound){
        if(userFound){
            return res.status(400).json({ok: false, msg: 'Usuário já existe para esse email'});
        } else {
            user.save(function (err) {
                if(err) {
                    return res.status(400).json({ok: false, msg: 'Erro ao cadastrar usuário'});
                }
                res.status(200).json({ok: true, msg: 'Usuário cadastrado com sucesso'});
            });
        }
    });
});

router.get('/', function (req, res, next) {
    res.render('index');
});

module.exports = router;
