import { createUser, getUserById } from '../service/userService.js';

export const createUserController = async (req, res) => {
	return await createUser.create(req, res);
};

export const getUserByIdController = async (req, res) => {
	return await getUserById.get(req, res);
};
