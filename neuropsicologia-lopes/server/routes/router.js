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
            return res.status(400).json({status: 'usuario ja existe'});
        }
        const user = new User({name, surname, email, password});
        user.save();
        res.status(301).json({status: 'ok'});
    })

});


module.exports = router;
