module.exports = {
    HOST: "localhost",
    PORT: "5432",
    USER: "postgres",
    PASSWORD: "test",
    DB: "users",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };