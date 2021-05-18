import { getAllUsers, getActiveUsersByParams, getUserById, createUser, updateUser, deleteUser } from "../services/user";

exports.create = (req, res) => {  
    createUser(req.body)
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
  getAllUsers()
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
  getActiveUsersByParams(req.query.loginSubstring, req.query.length)
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

  getUserById(id)
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

  updateUser(id, req.body)
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

  deleteUser(id)
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