module.exports = (sequelize, Sequelize) => {
    const UserGroup = sequelize.define("user_group", {
      id: {
        type: Sequelize.STRING,
        primaryKey: true
        },
      group_id: {
        type: Sequelize.STRING
      },
      user_id: {
        type: Sequelize.STRING
      }
    }, {
      freezeTableName: true,

      timestamps: false,

      createdAt: false,

      updatedAt: false,
    });
  
    return UserGroup;
  };