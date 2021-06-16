import { addUsersToGroup } from "../services/user-group";

exports.addUsersToGroup = (req, res) => {
  addUsersToGroup(req.body)
    .then(num => {
      res.send({
        message: "Data was updated successfully!"
      });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error while updating!",
        details: err
      });
    });
};