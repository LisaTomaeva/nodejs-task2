import { addUsersToGroup } from "../services/user-group";

exports.addUsersToGroup = (req, res) => {
  addUsersToGroup(req.body)
    .then(num => {
      console.log('RETURNING', num)
      if (num == 1) {
        res.send({
          message: "Data was updated successfully!"
        });
      } else {
        res.send({
          message: `Cannot update data!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error while updating!",
        details: err
      });
    });
};