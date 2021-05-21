const validator = require('express-joi-validation').createValidator({
    passError: true
  });
  
  import { groupBodySchema } from "../validation";
  
  module.exports = app => {
      const users = require("../controllers/group.js");
    
      var router = require("express").Router();
    
      router.post("/", validator.body(groupBodySchema), users.create);
    
      router.get("/", users.findAll);
        
      router.get("/:id", users.findOne);
    
      router.put("/:id", validator.body(groupBodySchema), users.update);
    
      router.delete("/:id", users.delete);
      
      app.use('/api/groups', router);
    };