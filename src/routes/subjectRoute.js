import { Router } from 'express';
import {
	createSubjectController,
	deleteSubjectController,
	getAllSubjectController,
	getSubjectByIdController,
	updateSubjectController,
} from '../modules/Subjects/controller/subjectController.js';

const subjectRouter = Router();

subjectRouter.post('/create/subject', createSubjectController);
subjectRouter.get('/subject/:id', getSubjectByIdController);
subjectRouter.get('/all/subject', getAllSubjectController);
subjectRouter.patch('/update/subject/:id', updateSubjectController);
subjectRouter.delete('/delete/subject/:id', deleteSubjectController);

export default subjectRouter;
