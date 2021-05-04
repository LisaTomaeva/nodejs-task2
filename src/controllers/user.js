const db = require("../models/main");
import { v4 as uuidv4 } from 'uuid';

const Users = db.users;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    // Validate request
    // if (!req.body.title) {
    //   res.status(400).send({
    //     message: "Content can not be empty!"
    //   });
    //   return;
    // }
  
    const user = {
      id: uuidv4(),
      username: req.body.login,
      pswd: req.body.password,
      age: req.body.age,
      isdeleted: false
    };
  
    console.log(req)
    Users.create(user)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Unknown error"
        });
      });
  };
exports.findAllActive = (req, res) => {
  // res.send({id: "123"})
    // const title = req.query.title;
    // var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;
  
    Users.findAll(
      // { where: condition }
      )
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Unknown error"
        });
      });
  
};

exports.findOne = (req, res) => {
  
};

exports.update = (req, res) => {
  
};

exports.delete = (req, res) => {
  
};

exports.deleteAll = (req, res) => {
  
};

exports.findAllPublished = (req, res) => {
  
};