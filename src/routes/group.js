import Validator from 'express-joi-validation';
import Express from "express";
import GroupsController from "../controllers/group.js";
import { groupBodySchema } from "../validation";

const validator = Validator.createValidator({
    passError: true
  });
  
const GroupRoute = app => {
  
    const router = Express.Router();
  
    router.post("/", validator.body(groupBodySchema), GroupsController.create);
  
    router.get("/", GroupsController.findAll);
      
    router.get("/:id", GroupsController.findOne);
  
    router.put("/:id", validator.body(groupBodySchema), GroupsController.update);
  
    router.delete("/:id", GroupsController.delete);
    
    app.use('/api/groups', router);
  };

export default GroupRoute;