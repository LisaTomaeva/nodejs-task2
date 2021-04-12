const express = require('express');
const validator = require('express-joi-validation').createValidator({
  passError: true
});

import { bodySchema } from "./validation";
import { getUserById, getAutoSuggestUsers, createUser, deleteUser, changeUser,  } from "./data/methods";

var app = express();

app.listen('3000')

app.use(express.json());

app.get('/users', function(req, res) {
  res.send(getAutoSuggestUsers(req.query.length, req.query.loginSubstring));
  });

app.get('/users/:id', function(req, res) {
  res.send(getUserById(req.params.id))
  });

app.post('/users', validator.body(bodySchema), function(req, res) {
  createUser(req.body)
  res.send({
    status: "SUCCESS"
  });
});

app.put('/users/:id', validator.body(bodySchema), function(req, res) {
  changeUser(req.params.id, req.body)
  res.send({
    status: "SUCCESS"
  });
  });

app.delete('/users/:id', function(req, res) {
  deleteUser(req.params.id)
  res.send({status: "SUCCESS"});
  });

app.use((err, req, res, next) => {
  if (err && err.error && err.error.isJoi) {
    res.status(400).json({
        type: err.type,
        message: err.error.toString()
    });
    } else {
      next(err);
    }
  });