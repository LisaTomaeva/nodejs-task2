import Validator from 'express-joi-validation';
import Express from "express";
import UsersController from "../controllers/user.js";
import { bodySchema } from "../validation";

const validator = Validator.createValidator({
  passError: true
});

const UserRoute = app => {
    const router = Express.Router();
  
    router.post("/", validator.body(bodySchema), UsersController.create);
  
    router.get("/", UsersController.findAll);
  
    router.get("/active", UsersController.findAllActive);
  
    router.get("/:id", UsersController.findOne);
  
    router.put("/:id", validator.body(bodySchema), UsersController.update);
  
    router.delete("/:id", UsersController.delete);
    
    app.use('/api/users', router);
  };

  export default UserRoute;