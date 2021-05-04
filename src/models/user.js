module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
      id: {
        type: Sequelize.STRING,
        primaryKey: true
        },
      username: {
        type: Sequelize.STRING
      },
      pswd: {
        type: Sequelize.STRING
      },
      age: {
        type: Sequelize.NUMBER
      },
      isdeleted: {
        type: Sequelize.BOOLEAN
      },
    }, {
      timestamps: false,

      createdAt: false,

      updatedAt: false,
    });
  
    return User;
  };