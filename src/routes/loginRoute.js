import { Router } from 'express';
import loginController from '../modules/User/controller/loginController.js';
import userController from '../modules/User/controller/userController.js';

const userRouter = Router();

userRouter.post('/register', userController.create);

userRouter.post('/login', loginController.login);

export default userRouter;
