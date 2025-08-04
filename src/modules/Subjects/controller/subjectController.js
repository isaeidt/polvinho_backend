import {
	createSubject,
	deleteSubject,
	getAllSubject,
	getSubjectById,
	updateSubject,
} from '../service/subjectService.js';

export const createSubjectController = async (req, res) => {
	return await createSubject.create(req, res);
};

export const getSubjectByIdController = async (req, res) => {
	return await getSubjectById.get(req, res);
};

export const getAllSubjectController = async (_req, res) => {
	return await getAllSubject.get(_req, res);
};

export const updateSubjectController = async (_req, res) => {
	return await updateSubject.update(_req, res);
};

export const deleteSubjectController = async (_req, res) => {
	return await deleteSubject.delete(_req, res);
};
