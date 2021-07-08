import { login } from "../services/login";

exports.login = (req, res) => {
    try {
        const token = login(req.body)
        return res.send(token);
    } catch(err) {
        res.status(500).send({
            message: "Error while updating!",
            details: err
          });
    }
};