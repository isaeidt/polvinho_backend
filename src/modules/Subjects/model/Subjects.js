import mongoose from 'mongoose';

const { Schema } = mongoose;

const SubjectsSchema = new Schema(
	{
		name: { type: String, required: true, unique: true },
		is_deleted: { type: Boolean, required: true },
		professor: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'users',
			default: null,
		},
	},
	{ timestamps: true }, //função do mongoose que adiciona automaticamente o cretAt e updateAt
);

const Subjects = mongoose.model('Subjects', SubjectsSchema);

export default Subjects;
