import bcrypt from 'bcryptjs';
import mongoose from 'mongoose';

const { Schema } = mongoose;

const UsersSchema = new Schema(
	{
		name: { type: String, required: true },
		email: { type: String, required: true, unique: true },
		registration: { type: String, required: true, unique: true },
		password_hash: { type: String, required: true },
		role: { type: String, required: true, default: 'Aluno' },
		is_deleted: { type: Boolean },
		subject: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'subjects',
			default: null,
		},
	},
	{ timestamps: true }, //função do mongoose que adiciona automaticamente o cretAt e updateAt
);

UsersSchema.pre('save', async function (next) {
	const user = this;

	if (!user.isModified('password_hash')) {
		return next();
	}

	const salt = await bcrypt.genSalt(10);
	const hash = await bcrypt.hash(user.password_hash, salt);

	user.password_hash = hash;
	next();
});

const Users = mongoose.model('Users', UsersSchema);

export default Users;
