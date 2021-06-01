import { addUsersToGroup } from "../services/user-group";

exports.addUsersToGroup = (req, res) => {
  const id = req.params.id;

  addUsersToGroup(id, req.body)
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Data was updated successfully!"
        });
      } else {
        res.send({
          message: `Cannot update data with id=${id}!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Group with id=" + id
      });
    });
};