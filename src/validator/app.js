import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import loginRoute from '../routes/loginRoute.js';
import userRoute from '../routes/userRoute.js';
import conn from '../validator/conn.js';

const app = express();
app.use(cors());
const PORT = process.env.PORT || 3000;
app.use(express.json());

app.use(express.json());

app.use('/login', loginRoute);
app.use('/users', userRoute);

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
