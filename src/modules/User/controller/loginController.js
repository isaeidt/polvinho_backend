import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../model/Users.js';

class LoginController {
	async login(req, res) {
		try {
			const { email, registration, password_hash } = req.body;
			let user;
			if (email) {
				user = await User.findOne({ email }).select('+password_hash');
			} else if (registration) {
				user = await User.findOne({ registration }).select(
					'+password_hash',
				);
			}

			if (!user) {
				return res
					.status(401)
					.json({ error: 'Credenciais inválidas.' });
			}

			const isPasswordCorrect = await bcrypt.compare(
				password_hash,
				user.password_hash,
			);

			if (!isPasswordCorrect) {
				return res.status(401).json({ error: 'Senha incorreta.' });
			}

			const token = jwt.sign(
				{ id: user._id, role: user.role },
				process.env.JWT_SECRET,
				{ expiresIn: process.env.JWT_EXPIRATION_TIME },
			);

			user.password_hash = undefined;

			return res.status(200).json({
				user: { id: user._id, name: user.name, role: user.role },
				token,
			});
		} catch (error) {
			return res.status(500).json({
				error: 'Falha ao fazer login.',
				details: error.message,
			});
		}
	}
}

export default new LoginController();
