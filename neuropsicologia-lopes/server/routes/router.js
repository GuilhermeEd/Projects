var express = require('express');
var router = express.Router();
var variables = require('../server_config/variables')
var mongoose = require('mongoose');
var User = require('../server_config/models/user.js');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

const secret = require('../server_config/variables.js').auth.jwtsecret;

router.post('/api/login', function (req, res, next) {
    const {email, password} = req.body;
    User.findOne({email}, function(err, userFound){
        if(userFound){
            if(!bcrypt.compareSync(req.body.password, userFound.password)){
                return res.status(400).json({ok: false, msg: 'Email e/ou Senha inválido(s)'});
            } else {
                const token = jwt.sign({user}, secret, {expiresIn: 7200})
                res.status(200).json({ok: true, msg: 'Login efetuado com sucesso', token});
            }
        }
    });
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
