import { Router } from 'express';
import {
	createAlunoController,
	createProfessorController,
	deleteUserController,
	getAllUsersController,
	getUserByIdController,
	updateUserController,
} from '../modules/User/controller/userController.js';

const userRouter = Router();

userRouter.post('/createProfessor', createProfessorController);
userRouter.post('/createAluno', createAlunoController);
userRouter.get('/:id', getUserByIdController);
userRouter.get('/', getAllUsersController);
userRouter.patch('/:id', updateUserController);
userRouter.delete('/:id', deleteUserController);

export default userRouter;
