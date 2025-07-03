import jwt from 'jsonwebtoken';

const verifyToken = (req, res, next) => {
	const authHeader = req.headers['authorization'];

	if (!authHeader) {
		return res.status(403).json({ error: 'Nenhum token fornecido.' });
	}

	const parts = authHeader.split(' ');

	if (parts.length !== 2 || parts[0] !== 'Bearer') {
		return res.status(401).json({ error: 'Token com formato inválido.' });
	}

	const token = parts[1];

	jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
		if (err) {
			return res.status(401).json({
				error: 'Token inválido ou expirado. Faça login novamente.',
			});
		}

		req.user = {
			id: decoded.id,
			role: decoded.role,
		};

		next();
	});
};

export default verifyToken;
