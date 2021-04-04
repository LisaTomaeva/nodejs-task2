import { Users } from './users';
import { v4 as uuidv4 } from 'uuid';
// var users = require("./users")

// const users = []
const allUsers = [...Users];


export function getUserList() {
    return allUsers
}

export function getUserById(id) {
    const user = allUsers.find((u) => id === u.id)
    console.log(user, id)
    return user
}

export function createUser(userData) {
    const newId = uuidv4()
    userData.id = newId;
    allUsers.push({...userData})
}

export function changeUser(id, userData) {
    const user = allUsers.find((u) => id === u.id);
    user = {...userData}
} 

export function deleteUser(id) {
    getUserById(id).isDeleted = true;
}