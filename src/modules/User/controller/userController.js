import {
	createAluno,
	createProfessor,
	deleteUser,
	getAllAluno,
	getAllProfessor,
	getUserById,
	updatePassword,
	updateUser,
} from '../service/userService.js';

//não adicionei as validações ainda!! mas tem que colocar o verifyToken e verifyRole

export const createProfessorController = async (req, res) => {
	return await createProfessor.get(req, res);
};
export const createAlunoController = async (req, res) => {
	return await createAluno.get(req, res);
};

export const getUserByIdController = async (req, res) => {
	return await getUserById.get(req, res);
};

export const updateUserController = async (req, res) => {
	return await updateUser.update(req, res);
};

export const updatePasswordController = async (req, res) => {
	return await updatePassword.update(req, res);
};

export const getAllAlunoController = async (_req, res) => {
	return await getAllAluno.get(_req, res);
};

export const getAllProfessorController = async (_req, res) => {
	return await getAllProfessor.get(_req, res);
};

export const deleteUserController = async (_req, res) => {
	return await deleteUser.delete(_req, res);
};
