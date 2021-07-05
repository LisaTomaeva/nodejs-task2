import db from "../models/main";
import { v4 as uuidv4 } from 'uuid';

const UsersGroups = db.usersGroups;

const addUsersToGroup = (body) => {
  let objectsToAdd = []
  body.users.forEach((user_id) => {
    objectsToAdd.push({
      id: uuidv4(),
      group_id: body.groupId,
      user_id
    })
  })
  console.log(objectsToAdd)
  return UsersGroups.bulkCreate(objectsToAdd)
}

const getUsersAndGroups = () => {
  return UsersGroups.findAll();
}

export { addUsersToGroup, getUsersAndGroups }