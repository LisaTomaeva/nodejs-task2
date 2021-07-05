import Express from "express";
import UserGroupController from "../controllers/user-group.js";

const UserGroupRoute = app => {
    const router = Express.Router();

    router.post("/", UserGroupController.addUsersToGroup);

    router.get("/", UserGroupController.getUsersAndGroupsTable);

    app.use('/api/users-groups', router);
}

export default UserGroupRoute;