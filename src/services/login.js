import db from "../models/main";
import jwt from "jsonwebtoken";

const Users = db.users;

const login = (body) => {
  var condition = { username: body.login };

  const user = Users.findAndCountAll({ where: condition});

  if (user === undefined || user.username !== body.login) {
      res.status(403).send({ sucess: false, message: "Wrong username/password combination." })
  } else {
      let payload = { "sub": user.id, "isdeleted": user.isdeleted };
      let token = jwt.sign(payload, 'secret', { expiresIn: 10000 });
      return token;
  }
}

export { login };