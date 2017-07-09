var express = require('express');
var router = express.Router();
var variables = require('../server_config/variables')

var User = require('./models/user');

router.get('/', function (req, res, next) {
    res.render('index');
});

router.post('/signup', function (req, res) {
    const {name, surname, email, password} = req.body;

    User.findOne({email},function(err, doc){
        if(doc){
            return res.json(400, {status: 'nok'});
        }
        const user = new User({name, surname, email, password});
        user.save();
        res.json(201, {status: 'ok'});
    })

});


module.exports = router;
