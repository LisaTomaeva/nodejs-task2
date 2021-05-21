module.exports = (sequelize, Sequelize) => {
    const Group = sequelize.define("group", {
      id: {
        type: Sequelize.STRING,
        primaryKey: true
        },
      group_name: {
        type: Sequelize.STRING,
        unique: true
      },
      roles: {
        type: Sequelize.ARRAY(Sequelize.ENUM("READ", "WRITE", "DELETE", "SHARE", "UPLOAD_FILES"))
      }
    }, {
      timestamps: false,

      createdAt: false,

      updatedAt: false,
    });
  
    return Group;
  };