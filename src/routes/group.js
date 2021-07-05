import Validator from 'express-joi-validation';
import Express from "express";
import GroupsController from "../controllers/group.js";
import { groupBodySchema } from "../validation";
import { tokenCheck } from "../middlewares/auth.js";

const validator = Validator.createValidator({
    passError: true
  });
  
const GroupRoute = app => {
  
    const router = Express.Router();
  
    router.post("/", tokenCheck, validator.body(groupBodySchema), GroupsController.create);
  
    router.get("/", tokenCheck, GroupsController.findAll);
      
    router.get("/:id", tokenCheck, GroupsController.findOne);
  
    router.put("/:id", tokenCheck, validator.body(groupBodySchema), GroupsController.update);
  
    router.delete("/:id", tokenCheck, GroupsController.delete);
    
    app.use('/api/groups', router);
  };

export default GroupRoute;