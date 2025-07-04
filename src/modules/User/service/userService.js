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
export default new createUser();
