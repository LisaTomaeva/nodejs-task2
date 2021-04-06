import { Users } from './users';
import { v4 as uuidv4 } from 'uuid';
// var users = require("./users")

// const users = []
const allUsers = [...Users];


export function getUserList() {
    return allUsers.filter((u) => u.isDeleted === false);
}

export function getUserById(id) {
    const user = allUsers.find((u) => id === u.id)
    return user
}

export function createUser(userData) {
    const newId = uuidv4();
    userData.id = newId;
    userData.isDeleted = false;
    allUsers.push({...userData})
}

export function changeUser(id, userData) {
    let user = getUserById(id);
    user.login = userData.login;
    user.password = userData.password;
    user.age = userData.age;
} 

export function deleteUser(id) {
    getUserById(id).isDeleted = true;
}