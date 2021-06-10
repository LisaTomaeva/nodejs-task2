import dbConfig from "../config/db.config.js";

import Sequelize from "sequelize";

import UserModel from "./user.js";
import GroupModel from "./group.js";
import UserGroupModel from "././user-group.js";

// const sequelize = new Sequelize('postgres://postgres:test@localhost:5432/users');
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  port: dbConfig.PORT,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = UserModel(sequelize, Sequelize);
db.groups = GroupModel(sequelize, Sequelize);
db.usersGroups = UserGroupModel(sequelize, Sequelize);

module.exports = db;