import mongoose from 'mongoose';

const { Schema } = mongoose;

const SubjectsSchema = new Schema(
	{
		name: { type: String, required: true, unique: true },
		is_deleted: { type: Boolean },
		professor: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
			default: null,
		},
	},
	{ timestamps: true }, //função do mongoose que adiciona automaticamente o cretAt e updateAt
);

const Subject = mongoose.model('Subjects', SubjectsSchema);

export default Subject;
