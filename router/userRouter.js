import { Router } from "express"
const userRouter = Router();

import { loginController, registerController, currentController } from "../controller/userController.js";

userRouter.post('/registration', registerController);
userRouter.post('/login', loginController);

userRouter.get('/current', currentController );

export default userRouter;