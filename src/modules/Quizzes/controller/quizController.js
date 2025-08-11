import {
	createQuiz,
	deleteQuiz,
	getAllQuiz,
	getQuizById,
	updateQuiz,
} from '../service/quizService.js';

//não adicionei as validações ainda!! mas tem que colocar o verifyToken e verifyRole

export const createQuizController = async (req, res) => {
	return await createQuiz.create(req, res);
};

export const getQuizByIdController = async (req, res) => {
	return await getQuizById.get(req, res);
};

export const updateQuizController = async (req, res) => {
	return await updateQuiz.update(req, res);
};

export const getAllQuizController = async (_req, res) => {
	return await getAllQuiz.get(_req, res);
};

export const deleteQuizController = async (_req, res) => {
	return await deleteQuiz.delete(_req, res);
};
