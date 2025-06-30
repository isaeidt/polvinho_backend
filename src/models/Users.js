import mongoose from 'mongoose';

const { Schema } = mongoose;

const UsersSchema = new Schema(
	{
		name: { type: String, required: true },
		email: { type: String, required: true },
		registration: { type: String, required: true },
		password_hash: { type: String, required: true },
		role: { type: String, required: true, default: 'Aluno' },
		is_deleted: { type: Boolean, required: true },
	},
	{ timestamps: true }, //função do mongoose que adiciona automaticamente o cretAt e updateAt
);

const Users = mongoose.model('Users', UsersSchema);

export default Users;

//como usar a hash e como linkar a subject com o user no banco
