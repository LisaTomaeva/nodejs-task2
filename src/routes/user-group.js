import Express from "express";
import UserGroupController from "../controllers/user-group.js";
import { tokenCheck } from "../middlewares/auth.js";

const UserGroupRoute = app => {
    const router = Express.Router();

    router.post("/", tokenCheck, UserGroupController.addUsersToGroup);

    router.get("/", tokenCheck, UserGroupController.getUsersAndGroupsTable);

    app.use('/api/users-groups', router);
}

export default UserGroupRoute;