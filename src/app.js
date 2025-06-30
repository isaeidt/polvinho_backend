import 'dotenv/config';
import express from 'express';
import conn from './db/conn.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
	res.status(200).send('Polvinho no ar! API funcionando.');
});

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
