import { Router } from 'express';
import loginController from '../modules/User/controller/loginController.js';
import { createUserController } from '../modules/User/controller/userController.js';

const userRouter = Router();

userRouter.post('/register', createUserController);

userRouter.post('/login', loginController.login);

export default userRouter;
