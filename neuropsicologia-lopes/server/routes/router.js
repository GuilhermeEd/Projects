var express = require("express");
var router = express.Router();
var variables = require("../server_config/variables");
var mongoose = require("mongoose");
var User = require("../server_config/models/user.js");
var Event = require("../server_config/models/event.js");
var bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");

const secret = require("../server_config/variables.js").auth.jwtsecret;

const { user, pass, host, port, name } = variables.db;
mongoose.connect(`mongodb://${user}:${pass}@${host}:${port}/${name}`);
// ADD ROUTES THAT DEPENDS ON DATABASE CONNECTION DOWN HERE

router.post("/api/login", function(req, res, next) {
  const { email, password } = req.body;
  User.findOne({ email }, function(err, userFound) {
    if (userFound) {
      if (!bcrypt.compareSync(req.body.password, userFound.password)) {
        return res
          .status(400)
          .json({ ok: false, msg: "Email e/ou Senha inválido(s)" });
      } else {
        const token = jwt.sign({ user: userFound }, secret, {
          expiresIn: 7200
        });
        res
          .status(200)
          .json({ ok: true, msg: "Login efetuado com sucesso", token });
      }
    } else {
      return res
        .status(400)
        .json({ ok: false, msg: "Email e/ou Senha inválido(s)" });
    }
  });
});

router.post("/api/signup", function(req, res, next) {
  const { firstName, lastName, email, password } = req.body;
  if (password.length < 4)
    return res
      .status(400)
      .json({ ok: false, msg: "Senha deve ter ao menos 4 caracteres" });
  const user = new User({
    firstName,
    lastName: lastName,
    email,
    password: bcrypt.hashSync(password, 10),
    events: []
  });
  User.findOne({ email }, function(err, userFound) {
    if (userFound) {
      return res
        .status(400)
        .json({ ok: false, msg: "Usuário já existe para esse email" });
    } else {
      user.save(function(err) {
        if (err) {
          return res
            .status(400)
            .json({ ok: false, msg: "Erro ao cadastrar usuário" });
        }
        const token = jwt.sign({ user }, secret, { expiresIn: 7200 });
        res
          .status(200)
          .json({ ok: true, msg: "Usuário cadastrado com sucesso", token });
      });
    }
  });
});

router.post("/api/auth", function(req, res, next) {
  jwt.verify(req.body.token, secret, function(err, decoded) {
    if (err) {
      return res.status(500).json({ ok: false, msg: "Autenticação falhou" });
    } else {
      return res.status(200).json({ ok: true, user: decoded });
    }
  });
});

// EVENT ROUTES

router.post("/api/createnewevent", function(req, res, next) {
	jwt.verify(req.body.token, secret, function(err, decoded) {
    if (err) {
      return res.status(500).json({ ok: false, msg: "Autenticação falhou" });
    } else {
      User.findOne({email: decoded.user.email}, function(err, userFound) {
        if (!userFound) {
          return res.status(400).json({ ok: false, msg: "Autenticação falhou" }); // Usuário não encontrado
        } else {
          const { title, client, time, desc } = req.body;
          const event = new Event({title, client, time, desc, user: userFound._id})
          event.save(function(err){
            console.log(userFound);
            console.log(err);
            if(err){
              return res.status(200).json({ ok: false, msg: "Erro ao criar evento", user: decoded });
            } else {
              return res.status(200).json({ ok: true, msg: "Evento criado com sucesso", user: decoded });
            }
          })
        }
      });
    }
  });
});

router.get("/", function(req, res, next) {
  res.render("index");
});

module.exports = router;
