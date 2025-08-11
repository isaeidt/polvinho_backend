import Quiz from '../model/Quizzes.js';

class CreateQuiz {
	async create(req, res) {
		try {
			const {
				title,
				max_attempts,
				time_minutes,
				release_date,
				subjects,
			} = req.body;

			const quiz = await Quiz.create({
				title,
				max_attempts,
				time_minutes,
				release_date,
				professor: subjects._id, //pegar o id do professor pelo is salvo na subject
				subjects,
			});

			return res.status(201).json(quiz);
		} catch (error) {
			return res.status(500).json({
				error: 'Falha ao cadastrar Quiz',
				details: error.message,
			});
		}
	}
}

class GetQuizById {
	async get(req, res) {
		try {
			const { id } = req.params;
			const quiz = await Quiz.findById(id);

			if (!quiz) {
				return res.status(400).json({ error: 'Quiz não encontrado' });
			}

			return res.status(200).json(quiz);
		} catch (error) {
			return res.status(500).json({
				error: 'Falha ao encontrar Quiz',
				details: error.message,
			});
		}
	}
}

class GetAllQuiz {
	async get(_req, res) {
		try {
			const quiz = await Quiz.find({});
			return res.status(200).json(quiz);
		} catch (error) {
			return res.status(500).json({
				error: 'Falha ao encontrar quizzes',
				details: error.message,
			});
		}
	}
}

class UpdateQuiz {
	async update(req, res) {
		try {
			const { id } = req.params;
			const updates = {};
			const quiz = await Quiz.findById(id);

			if (!quiz) {
				return res.status(404).json({ error: 'Quiz não encontrado' });
			}

			if (quiz.is_published) {
				if (req.body.title) {
					updates.title = req.body.title;
				}
				if (req.body.max_attempts) {
					updates.max_attempts = req.body.max_attempts;
				}
				if (req.body.release_date) {
					updates.release_date = req.body.release_date;
				}
				if (req.body.subjects) {
					updates.subjects = req.body.subjects; //pegar o id do professor pelo is salvo na subject
				}

				const updateQuiz = await Quiz.findByIdAndUpdate(id, updates, {
					new: true,
				});

				return res.status(200).json(updateQuiz);
			} else {
				return res
					.status(404)
					.json({ error: 'Quiz não pode ser editado' });
			}
		} catch (error) {
			return res.status(500).json({
				error: 'Falha ao editar quiz',
				details: error.message,
			});
		}
	}
}

class DeleteQuiz {
	async delete(req, res) {
		try {
			const { id } = req.params;
			const deleteQuiz = await Quiz.findByIdAndUpdate(
				id,
				{ is_deleted: true },
				{ new: true },
			);

			return res.status(200).json(deleteQuiz);
		} catch (error) {
			return res.status(500).json({
				error: 'Falha ao deletar quiz',
				details: error.message,
			});
		}
	}
}

export const createQuiz = new CreateQuiz();
export const getQuizById = new GetQuizById();
export const getAllQuiz = new GetAllQuiz();
export const updateQuiz = new UpdateQuiz();
export const deleteQuiz = new DeleteQuiz();
