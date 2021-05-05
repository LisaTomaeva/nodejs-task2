const validator = require('express-joi-validation').createValidator({
  passError: true
});

import { bodySchema } from "../validation";

module.exports = app => {
    const users = require("../controllers/user.js");
  
    var router = require("express").Router();
  
    router.post("/", validator.body(bodySchema), users.create);
  
    router.get("/", users.findAll);
  
    router.get("/active", users.findAllActive);
  
    router.get("/:id", users.findOne);
  
    router.put("/:id", validator.body(bodySchema), users.update);
  
    router.delete("/:id", users.delete);
    
    app.use('/api/users', router);
  };