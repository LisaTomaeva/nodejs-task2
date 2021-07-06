import Express from "express";
import LoginController from "../controllers/login";
  
const Login = app => {
  
    const router = Express.Router();
  
    router.post("/", LoginController.login);
    
    app.use('/api/login', router);
  };

export default Login;