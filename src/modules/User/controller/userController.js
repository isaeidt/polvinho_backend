import {
	createUser,
	deleteUser,
	getAllUsers,
	getUserById,
	updateUser,
} from '../service/userService.js';

export const createUserController = async (req, res) => {
	return await createUser.create(req, res);
};

export const getUserByIdController = async (req, res) => {
	return await getUserById.get(req, res);
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
