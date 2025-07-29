import {
	createAluno,
	createProfessor,
	deleteUser,
	getAllUsers,
	getAlunoById,
	getProfessorById,
	updateUser,
} from '../service/userService.js';

export const createProfessorController = async (req, res) => {
	return await createProfessor.create(req, res);
};
export const createAlunoController = async (req, res) => {
	return await createAluno.create(req, res);
};

export const getAlunoByIdController = async (req, res) => {
	return await getAlunoById.get(req, res);
};

export const getProfessorByIdController = async (req, res) => {
	return await getProfessorById.get(req, res);
};

export const updateUserController = async (req, res) => {
	return await updateUser.update(req, res);
};

export const getAllUsersController = async (_req, res) => {
	return await getAllUsers.get(_req, res);
};

export const deleteUserController = async (_req, res) => {
	return await deleteUser.delete(_req, res);
};
