import mongoose from 'mongoose';

const connectionUrl = process.env.DATABASE_URL;

async function main() {
	try {
		mongoose.set('strictQuery', true);
		await mongoose.connect(connectionUrl);
		console.log('CONECTADO AO BANCO DE DADOS (DOCKER) COM SUCESSO!');
	} catch (error) {
		console.error(`ERRO AO CONECTAR (DOCKER): ${error.message}`);
		throw error;
	}
}

export default main;
