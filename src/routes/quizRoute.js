import { Router } from 'express';
import {
	createQuizController,
	deleteQuizController,
	getAllQuizController,
	getQuizByIdController,
	updateQuizController,
} from '../modules/Quizzes/controller/quizController.js';

const quizRouter = Router();

quizRouter.post('/create/quiz', createQuizController);
quizRouter.get('/all/quiz', getAllQuizController);
quizRouter.get('/:id', getQuizByIdController);
quizRouter.patch('/update/:id', updateQuizController);
quizRouter.delete('/delete/:id', deleteQuizController);

export default quizRouter;
