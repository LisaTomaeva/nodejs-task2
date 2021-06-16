import db from "../models/main";
import { v4 as uuidv4 } from 'uuid';

const UsersGroups = db.usersGroups;

const addUsersToGroup = (body) => {
  let objectsToAdd = []
  body.users.forEach((userId) => {
    objectsToAdd.push({
      id: uuidv4(),
      groupId: body.groupId,
      userId
    })
  })
  console.log(objectsToAdd)
  return UsersGroups.bulkCreate(objectsToAdd, {returning: true})
}


export { addUsersToGroup }