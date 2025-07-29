import User from '../model/Users.js';
class createProfessor {
	async create(req, res) {
		try {
			const { email, registration, password_hash, name, subject } =
				req.body;

			if (await User.findOne({ email })) {
				return res
					.status(400)
					.json({ error: 'Este e-mail já está em uso' });
			}
			if (await User.findOne({ registration })) {
				return res
					.status(400)
					.json({ error: 'Esta matricula já está em uso' });
			}
			const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
			if (!regexEmail.test(email)) {
				return res
					.status(400)
					.json({ error: 'Formato email invalido' });
			}

			if (password_hash !== registration) {
				return res.status(400).json({
					error: 'Primeira senha deve ser igual a matricula',
				});
			}

			const user = await User.create({
				name,
				email,
				password_hash,
				registration,
				role: 'Professor',
				subject,
			});

			user.password_hash = undefined;
			return res.status(201).json(user);
		} catch (error) {
			return res.status(500).json({
				error: 'Falha ao registrar usuário',
				details: error.message,
			});
		}
	}
}

class createAluno {
	async create(req, res) {
		try {
			const { email, registration, password_hash, name, subject } =
				req.body;

			if (await User.findOne({ email })) {
				return res
					.status(400)
					.json({ error: 'Este e-mail já está em uso' });
			}
			if (await User.findOne({ registration })) {
				return res
					.status(400)
					.json({ error: 'Esta matricula já está em uso' });
			}
			const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
			if (!regexEmail.test(email)) {
				return res
					.status(400)
					.json({ error: 'Formato email invalido' });
			}

			if (password_hash !== registration) {
				return res.status(400).json({
					error: 'Primeira senha deve ser igual a matricula',
				});
			}

			const user = await User.create({
				name,
				email,
				password_hash,
				registration,
				role: 'Aluno',
				subject,
			});

			user.password_hash = undefined;
			return res.status(201).json(user);
		} catch (error) {
			return res.status(500).json({
				error: 'Falha ao registrar usuário',
				details: error.message,
			});
		}
	}
}

class getUserById {
	async get(req, res) {
		try {
			const { id } = req.params;
			const user = await User.findById(id);

			if (!user) {
				return res.status(400).json({ error: 'User não encontrado' });
			}

			return res.status(200).json(user);
		} catch (error) {
			return res.status(500).json({
				error: 'Falha ao encontrar usuário',
				details: error.message,
			});
		}
	}
}

class getAllProfessor {
	async get(_req, res) {
		try {
			const users = await User.find({ role: 'Professor' });
			return res.status(200).json(users);
		} catch (error) {
			return res.status(500).json({
				error: 'Falha ao encontrar professores',
				details: error.message,
			});
		}
	}
}

class getAllAluno {
	async get(_req, res) {
		try {
			const users = await User.find({ role: 'Aluno' });
			console.log('🚀 ~ getAllUsers ~ get ~ users:', users);
			return res.status(200).json(users);
		} catch (error) {
			return res.status(500).json({
				error: 'Falha ao encontrar alunos',
				details: error.message,
			});
		}
	}
}

class updateUser {
	async update(req, res) {
		try {
			const { id } = req.params;
			const updates = {};

			if (req.body.name) {
				updates.name = req.body.name;
			}
			if (req.body.email) {
				updates.email = req.body.email;
			}
			if (req.body.password_hash) {
				updates.password_hash = req.body.password_hash;
			}

			const updateUser = await User.findByIdAndUpdate(id, updates, {
				new: true,
			});

			return res.status(200).json(updateUser);
		} catch (error) {
			return res.status(500).json({
				error: 'Falha ao editar usuário',
				details: error.message,
			});
		}
	}
}

class deleteUser {
	async delete(req, res) {
		try {
			const { id } = req.params;
			const deleteUser = await User.findByIdAndUpdate(
				id,
				{ is_deleted: true },
				{ new: true },
			);
			return res.status(200).json(deleteUser);
		} catch (error) {
			return res.status(500).json({
				error: 'Falha ao deletar usuário',
				details: error.message,
			});
		}
	}
}

const createProfessorInstance = new createProfessor();
const getUserByIdInstance = new getUserById();
const updateUserInstance = new updateUser();
const getAllAlunoInstance = new getAllAluno();
const getAllProfessorInstance = new getAllProfessor();
const deleteUserInstance = new deleteUser();
const createAlunoInstance = new createAluno();

export {
	createAlunoInstance as createAluno,
	createProfessorInstance as createProfessor,
	deleteUserInstance as deleteUser,
	getAllAlunoInstance as getAllAluno,
	getAllProfessorInstance as getAllProfessor,
	getUserByIdInstance as getUserById,
	updateUserInstance as updateUser,
};
