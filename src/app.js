import dotenv from 'dotenv';
import express from 'express';

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.get('/admin', function (req, res) {
	res.status(200).send('Rota admin');
});

app.get('/aluno', function (req, res) {
	res.status(200).send('Rota aluno');
});

app.get('/professor', function (req, res) {
	res.status(200).send('Rota professor');
});

app.listen(PORT, () => {
	console.log(`Servidor rodando na porta ${PORT}`);
});
