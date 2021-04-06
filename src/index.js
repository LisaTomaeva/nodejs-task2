var express = require('express');
import { getUserById, getUserList, createUser, deleteUser, changeUser,  } from "./data/methods";

var app = express();

app.listen('3000')

app.use(express.json());

app.get('/users', function(req, res) {
  res.send(getAutoSuggestUsers(req.query.length, req.query.loginSubstring));
  });

app.get('/users/:id', function(req, res) {
  res.send(getUserById(req.params.id))
  });

app.post('/users', function(req, res) {
  createUser(req.body)
  res.send({
    status: "SUCCESS"
  });
});

app.put('/users/:id', function(req, res) {
  changeUser(req.params.id, req.body)
  res.send({
    status: "SUCCESS"
  });
  });

app.delete('/users/:id', function(req, res) {
  deleteUser(req.params.id)
  res.send({status: "SUCCESS"});
  });