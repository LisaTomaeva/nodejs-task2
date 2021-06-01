module.exports = (sequelize, Sequelize) => {
    const UserGroup = sequelize.define("user-group", {
      id: {
        type: Sequelize.STRING,
        primaryKey: true
        },
      groupId: {
        type: Sequelize.STRING
      },
      userId: {
        type: Sequelize.STRING
      }
    }, {
      timestamps: false,

      createdAt: false,

      updatedAt: false,
    });
  
    return UserGroup;
  };