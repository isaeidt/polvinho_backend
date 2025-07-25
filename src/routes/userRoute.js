import { Router } from 'express';
import {
	createUserController,
	deleteUserController,
	getAllUsersController,
	getUserByIdController,
	updateUserController,
} from '../modules/User/controller/userController.js';

const userRouter = Router();

userRouter.post('/create', createUserController);
userRouter.get('/:id', getUserByIdController);
userRouter.get('/', getAllUsersController);
userRouter.patch('/:id', updateUserController);
userRouter.delete('/:id', deleteUserController);

export default userRouter;
