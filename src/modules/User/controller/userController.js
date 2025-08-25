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
	try {
		const { email, registration, name, subjects } = req.body;

		if (!name || !email || !registration || !subjects) {
			return res.status(400).json({
				error: 'Todos os campos são obrigatórios: nome, email, matrícula e disciplinas.',
			});
		}

		if (typeof name !== 'string' || name.trim() === '') {
			return res
				.status(400)
				.json({ error: 'O nome deve ser um texto não vazio.' });
		}
		if (!Array.isArray(subjects) || subjects.length === 0) {
			return res.status(400).json({
				error: 'As disciplinas devem ser uma lista não vazia.',
			});
		}

		const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!regexEmail.test(email)) {
			return res
				.status(400)
				.json({ error: 'Formato de e-mail inválido.' });
		}

		const professor = await createProfessor.execute({
			email,
			registration,
			name,
			subjects,
		});

		return res.status(201).json(professor);
	} catch (error) {
		if (error.message.includes('em uso')) {
			return res.status(400).json({ error: error.message });
		}

		return res.status(500).json({
			error: 'Falha ao registrar professor.',
			details: error.message,
		});
	}
};
export const createAlunoController = async (req, res) => {
	return await createAluno.create(req, res);
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
