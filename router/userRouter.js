import { Router } from "express"
const userRouter = Router();

import { loginController, registerController, currentController } from "../controller/userController.js";
import validateToken from "../middleware/validateTokenHandlar.js";

userRouter.post('/registration', registerController);
userRouter.post('/login', loginController);

userRouter.get('/current', validateToken , currentController );

export default userRouter;