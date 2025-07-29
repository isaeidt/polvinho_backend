import { Router } from 'express';
import {
	createAlunoController,
	createProfessorController,
	deleteUserController,
	getAllUsersController,
	getAlunoByIdController,
	getProfessorByIdController,
	updateUserController,
} from '../modules/User/controller/userController.js';

const userRouter = Router();

userRouter.post('/createProfessor', createProfessorController);
userRouter.post('/createAluno', createAlunoController);
userRouter.get('/:id', getProfessorByIdController);
userRouter.get('/:id', getAlunoByIdController);
userRouter.get('/', getAllUsersController);
userRouter.patch('/:id', updateUserController);
userRouter.delete('/:id', deleteUserController);

export default userRouter;
