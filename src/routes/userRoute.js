import { Router } from 'express';
import {
	createAlunoController,
	createProfessorController,
	deleteUserController,
	getAllAlunoController,
	getAllProfessorController,
	getUserByIdController,
	updateUserController,
} from '../modules/User/controller/userController.js';

const userRouter = Router();

userRouter.post('/create/professor', createProfessorController);
userRouter.post('/create/aluno', createAlunoController);
userRouter.get('/all/professor', getAllProfessorController);
userRouter.get('/all/aluno', getAllAlunoController);
userRouter.get('/:id', getUserByIdController);
userRouter.patch('/update/:id', updateUserController);
userRouter.delete('/delete/:id', deleteUserController);

export default userRouter;
