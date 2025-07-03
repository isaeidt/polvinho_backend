import mongoose from 'mongoose';

const connectionString = process.env.MONGODB_URI;

async function main() {
	try {
		mongoose.set('strictQuery', true);
		await mongoose.connect(connectionString);
		console.log('CONECTADO AO BANCO DE DADOS (DOCKER) COM SUCESSO!');
	} catch (error) {
		console.error(`ERRO AO CONECTAR (DOCKER): ${error.message}`);
		throw error;
	}
}

export default main;
