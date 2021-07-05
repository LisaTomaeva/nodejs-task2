import Validator from 'express-joi-validation';
import Express from "express";
import UsersController from "../controllers/user.js";
import { userBodySchema } from "../validation";
import { tokenCheck } from "../middlewares/auth.js";

const validator = Validator.createValidator({
  passError: true
});

const UserRoute = app => {
    const router = Express.Router();
  
    router.post("/", tokenCheck, validator.body(userBodySchema), UsersController.create);
  
    router.get("/", tokenCheck, UsersController.findAll);
  
    router.get("/active", tokenCheck, UsersController.findAllActive);
  
    router.get("/:id", tokenCheck, UsersController.findOne);
  
    router.put("/:id", tokenCheck, validator.body(userBodySchema), UsersController.update);
  
    router.delete("/:id", tokenCheck, UsersController.delete);
    
    app.use('/api/users', router);
  };

  export default UserRoute;