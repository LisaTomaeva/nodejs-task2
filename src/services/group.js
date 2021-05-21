import db from "../models/main";
import { v4 as uuidv4 } from 'uuid';

const Groups = db.groups;

const getGroups = () => {
  return Groups.findAll()
}

const getGroupById = (id) => {
  return Groups.findByPk(id)
}

const createGroup = (body) => {
  const group = {
    id: uuidv4(),
    group_name: body.groupName,
    roles: body.roles
  };
  return Groups.create(group)
}

const updateGroup = (id, body) => {
  const updatedGroup = {
    group_name: body.groupName,
    roles: body.roles
  }

  return Users.update(updatedGroup, {
    where: { id: id }
  })
}

const deleteGroup = (id) => {
  return Groups.destroy({
   where: { id: id }
})
}

export { getGroups, getGroupById, createGroup, updateGroup, deleteGroup }