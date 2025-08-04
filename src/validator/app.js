import cookieParser from 'cookie-parser';
import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import loginRoute from '../routes/loginRoute.js';
import userRoute from '../routes/userRoute.js';
import conn from '../validator/conn.js';

const app = express();
app.use(
	cors({
		origin: 'http://127.0.0.1:5502',
		credentials: true,
	}),
);
app.use(cookieParser());
const PORT = process.env.PORT || 3000;
app.use(express.json());

app.use(express.json());

app.use('/login', loginRoute);
app.use('/api', userRoute);

conn()
	.then(() => {
		app.listen(PORT, () => {
			console.log(`Servidor iniciado com sucesso na porta ${PORT}`);
		});
	})
	.catch(err => {
		console.error('Falha ao iniciar a aplicação:', err);
		process.exit(1);
	});
