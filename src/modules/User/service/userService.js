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

			const regexSenha =
				/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{5,32}$/;
			if (!regexSenha.test(password_hash)) {
				return res
					.status(400)
					.json({ error: 'Formato senha invalido' });
			} // eu acho que isso não verifica aqui mas não sei

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
const createUserInstance = new createUser();
const getUserByIdInstance = new getUserById();
export { createUserInstance as createUser, getUserByIdInstance as getUserById };
