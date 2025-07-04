import createUser from '../service/userService.js';

export const createUserController = async (req, res) => {
	return await createUser.create(req, res);
};
