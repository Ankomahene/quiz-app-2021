import { ActionType } from '../../const/action-types';

export const questionReducer = (state, action) => {
	const payload = action.payload;
	switch (action.type) {
		case ActionType.newQuestion:
			return { ...state, questions: [ ...state.questions, payload.newQuestion ] };
		case ActionType.removeQuestion:
			const filteredQuestions = state.questions.filter(question => payload.questionId !== question.id);
			return { ...state, questions: [ ...filteredQuestions ] };
		default:
			return state;
	}
};
