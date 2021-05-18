import db from "../models/main";
import { v4 as uuidv4 } from 'uuid';

const Users = db.users;
const Op = db.Sequelize.Op;


const getAllUsers = () => {
  return Users.findAll()
}

const getActiveUsersByParams = (loginSubstring, length) => {
  var condition = loginSubstring ? { isdeleted: false, username: {[Op.like]: '%' + loginSubstring + '%' }} : { isdeleted: false };

  return Users.findAndCountAll(
        { where: condition,
          limit: length
        })
}

const getUserById = (id) => {
  return Users.findByPk(id)
}

const createUser = (body) => {
  const user = {
    id: uuidv4(),
    username: body.login,
    pswd: body.password,
    age: body.age,
    isdeleted: false
  };
  return Users.create(user)
}

const updateUser = (id, body) => {
  const updatedUser = {
    username: body.login,
    pswd: body.password,
    age: body.age,
  }

  return Users.update(updatedUser, {
    where: { id: id }
  })
}

const deleteUser = (id) => {
  const updatedUser = {
    isdeleted: true
  }
  return Users.update(updatedUser, {
    where: { id: id }
  })
}

export { getAllUsers, getActiveUsersByParams, getUserById, createUser, updateUser, deleteUser };
