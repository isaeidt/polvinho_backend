import Users from '../model/Users.js';
class createUser {
	async create(req, res) {
		try {
			const { email, registration, role, password_hash, name } = req.body;

			if (await Users.findOne({ email })) {
				return res
					.status(400)
					.json({ error: 'Este e-mail já está em uso' });
			}
			if (await Users.findOne({ registration })) {
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

			const user = await Users.create({
				name,
				email,
				password_hash,
				registration,
				role,
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
			const idUser = await Users.findById(id);

			if (!idUser) {
				return res
					.status(400)
					.json({ error: 'Usuário não encontrado' });
			}

			return res.status(201).json(idUser);
		} catch (error) {
			return res.status(500).json({
				error: 'Falha ao encontrar usuário',
				details: error.message,
			});
		}
	}
}

class getAllUsers {
	async get(_req, res) {
		try {
			const users = await Users.find();
			return res.status(201).json(users);
		} catch (error) {
			return res.status(500).json({
				error: 'Falha ao encontrar usuários',
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

			const updateUser = await Users.findByIdAndUpdate(id, updates, {
				new: true,
			});
			return res.status(201).json(updateUser);
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
			const deleteUser = await Users.findByIdAndUpdate(
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

const createUserInstance = new createUser();
const getUserByIdInstance = new getUserById();
const updateUserInstance = new updateUser();
const getAllUsersInstance = new getAllUsers();
const deleteUserInstance = new deleteUser();

export {
	createUserInstance as createUser,
	deleteUserInstance as deleteUser,
	getAllUsersInstance as getAllUsers,
	getUserByIdInstance as getUserById,
	updateUserInstance as updateUser,
};

//update, ler todos os usuarios e deletar(não pode deletar de verdade só tem que mudar o status do isDeleted pra true??)
// no update muitas coisas só o admin pode fazer, como validar isso
// os users só podem ser criados por um admin, como fazer essa validação, tipo só dara acesso as páginas de cadastro pela role no front?
// const regexSenha =
// 	/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{5,32}$/;
// if (!regexSenha.test(password_hash)) {
// 	return res
// 		.status(400)
// 		.json({ error: 'Formato senha invalido' });
// } // isso aqui com certeza nn fica aqui, pq a senha aqui tem que ser igual a matricula e dps no login que pede pra trocar
