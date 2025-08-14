import mongoose from 'mongoose';

const { Schema } = mongoose;

const QuizzesSchema = new Schema(
	{
		title: { type: String, required: true },
		is_published: { type: Boolean },
		max_attempts: { type: Number, required: true },
		time_minutes: { type: Number, required: true },
		release_date: { type: Date, requerid: true },
		is_deleted: { type: Boolean },
		professor: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'users',
			default: null,
		},
		subject: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Subjects',
			default: null,
		},
	},
	{ timestamps: true }, //função do mongoose que adiciona automaticamente o cretAt e updateAt
);

const Quizzes = mongoose.model('Quizzes', QuizzesSchema);

export default Quizzes;

//
