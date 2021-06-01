
module.exports = app => {
    const users = require("../controllers/user-group.js");

    router.post("/", users.addUsersToGroup);

    app.use('/api/users-groups', router);
}
