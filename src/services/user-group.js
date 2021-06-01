import db from "../models/main";
import { v4 as uuidv4 } from 'uuid';

const UsersGroups = db.usersGroups;

const addUsersToGroup = (body) => {
  const userGroupRecord = {
    id: uuidv4(),
    group_name: body.groupName,
    roles: body.roles
  };
  return UsersGroups.create(userGroupRecord)
}


export { addUsersToGroup }