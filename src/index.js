var express = require('express');
import { getUserById, getUserList, createUser, deleteUser,  } from "./data/methods";
// var methods = require("./methods.js");
var app = express();

app.listen('3000')

app.use(express.json());
app.get('/users', function(req, res) {
  res.send(getUserList());
    // res.send('get all active');
  });

app.get('/users/:id', function(req, res) {
  res.send(getUserById(req.params.id))

  // res.send('get user by id');
  });

app.post('/users/:id', function(req, res) {
    res.send('create');
  });

app.put('/users/:id', function(req, res) {
    res.send('change');
  });

app.delete('/users/:id', function(req, res) {
    res.send('delete');
  });

const test = {id: 2}
const test2 = {...test}
console.log(test2)