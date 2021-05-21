import { getGroups, getGroupById, createGroup, updateGroup, deleteGroup } from "../services/group";

exports.create = (req, res) => {  
    createGroup(req.body)
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
    getGroups()
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

  getGroupById(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error getting Group with id=" + id
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  updateGroup(id, req.body)
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Group was updated successfully!"
        });
      } else {
        res.send({
          message: `Cannot update Group data with id=${id}!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Group with id=" + id
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  deleteGroup(id)
  .then(num => {
    if (num == 1) {
      res.send({
        message: "Group was deleted successfully!"
      });
    } else {
      res.send({
        message: `Cannot delete Group with id=${id}.!`
      });
    }
  })
  .catch(err => {
    res.status(500).send({
      message: "Could not delete Group with id=" + id
    });
  });
  
};