const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");

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

db.users = require("./user.js")(sequelize, Sequelize);
db.groups = require("./group.js")(sequelize, Sequelize);

module.exports = db;