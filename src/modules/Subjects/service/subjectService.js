import User from '../../User/model/Users.js';
import Subject from '../model/Subjects.js';

class CreateSubject {
	async create(req, res) {
		try {
			const { name, professor } = req.body;

			if (await Subject.findOne({ name })) {
				return res
					.status(400)
					.json({ error: 'Este nome já está em uso' });
			}

			if (professor) {
				const idProfessor = await User.findById(professor);
				if (!idProfessor) {
					return res
						.status(400)
						.json({ error: 'Professor não encontrado' });
				}
			}

			if (name.length < 3) {
				return res.status(400).json({
					error: 'Nome da matéria deve conter ao menos 3 caracteres',
				});
			}

			const subject = await Subject.create({
				name,
				professor,
			});

			return res.status(201).json(subject);
		} catch (error) {
			return res.status(500).json({
				error: 'Falha ao registrar usuário',
				details: error.message,
			});
		}
	}
}

class GetSubjectById {
	async get(req, res) {
		try {
			const { id } = req.params;
			const subject = await Subject.findById(id);

			if (!subject) {
				return res
					.status(400)
					.json({ error: 'Matéria não encontrada' });
			}

			return res.status(200).json(subject);
		} catch (error) {
			return res.status(500).json({
				error: 'Falha ao encontrar a matéria',
				details: error.message,
			});
		}
	}
}

class GetAllSubject {
	async get(_req, res) {
		try {
			const subjects = await Subject.find({});
			return res.status(200).json(subjects);
		} catch (error) {
			return res.status(500).json({
				error: 'Falha ao encontrar matérias',
				details: error.message,
			});
		}
	}
}

class UpdateSubject {
	async update(req, res) {
		try {
			const { id } = req.params;
			const updates = {};

			if (req.body.name) {
				updates.name = req.body.name;
			}
			if (req.body.professor) {
				updates.professor = req.body.professor;
			}

			const updateSubject = await Subject.findByIdAndUpdate(id, updates, {
				new: true,
			});

			return res.status(200).json(updateSubject);
		} catch (error) {
			return res.status(500).json({
				error: 'Falha ao editar matéria',
				details: error.message,
			});
		}
	}
}

class DeleteSubject {
	async delete(req, res) {
		try {
			const { id } = req.params;
			const deleteSubject = await Subject.findByIdAndUpdate(
				id,
				{ is_deleted: true },
				{ new: true },
			);
			return res.status(200).json(deleteSubject);
		} catch (error) {
			return res.status(500).json({
				error: 'Falha ao deletar matéria',
				details: error.message,
			});
		}
	}
}

export const createSubject = new CreateSubject();
export const getSubjectById = new GetSubjectById();
export const getAllSubject = new GetAllSubject();
export const updateSubject = new UpdateSubject();
export const deleteSubject = new DeleteSubject();
