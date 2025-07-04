import { Router } from 'express';
import {
	createUserController,
	getUserByIdController,
} from '../modules/User/controller/userController.js';

const userRouter = Router();

userRouter.post('/create', createUserController);
userRouter.get('/:id', getUserByIdController);

export default userRouter;
