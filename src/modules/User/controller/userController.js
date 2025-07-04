import createUser from '../service/userService.js';

export const createUserController = async (req, res) => {
	const { status, data } = await createUser(req, res);

	return res.status(status).send(data);
};
