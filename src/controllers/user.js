const db = require("../models/main");
import { v4 as uuidv4 } from 'uuid';

const Users = db.users;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    const user = {
      id: uuidv4(),
      username: req.body.login,
      pswd: req.body.password,
      age: req.body.age,
      isdeleted: false
    };
  
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

exports.findAll = (req, res) => {
    Users.findAll()
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
    var condition = req.query.loginSubstring ? { isdeleted: false, username: {[Op.like]: '%' + req.query.loginSubstring + '%' }} : { isdeleted: false };

    Users.findAndCountAll(
      { where: condition,
        limit: req.query.length
      },
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
  const id = req.params.id;

  Users.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error getting User with id=" + id
      });
    });
  
};

exports.update = (req, res) => {
  const id = req.params.id;

  const updatedUser = {
    username: req.body.login,
    pswd: req.body.password,
    age: req.body.age,
  }

  Users.update(updatedUser, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "User data was updated successfully!"
        });
      } else {
        res.send({
          message: `Cannot update User data with id=${id}!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating User with id=" + id
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  const updatedUser = {
    isdeleted: true
  }

  Users.update(updatedUser, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "User was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete User with id=${id}!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error deleting User with id=" + id
      });
    });
  
};