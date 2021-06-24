import { ActionType } from '../../const/action-types';

export const optionReducer = (state, action) => {
	const payload = action.payload;
	const questionIndex = state.questions.findIndex(question => question.id === payload.questionId);

	switch (action.type) {
		case ActionType.newOption:
			if (questionIndex !== -1) {
				state.questions[questionIndex].options.push(payload.newOption);
			}
			return { ...state };
		case ActionType.removeOption:
			if (questionIndex !== -1) {
				state.questions[questionIndex].options = state.questions[questionIndex].options.filter(
					optionItem => optionItem.id !== payload.optionId
				);
			}
			return { ...state };
		case ActionType.setOptionText:
			if (questionIndex !== -1) {
				const questionOptionIndex = state.questions[questionIndex].options.findIndex(
					questionOption => questionOption.id === payload.optionId
				);
				if (questionOptionIndex !== -1) {
					state.questions[questionIndex].options[questionOptionIndex].optionText = payload.optionText;
				}
			}
			return { ...state };
		case ActionType.setOptionStatus:
			if (questionIndex !== -1) {
				const updatedOptionsList = state.questions[questionIndex].options.map(questionOption => {
					if (questionOption.id === payload.optionId) {
						return { ...questionOption, status: true };
					}
					return { ...questionOption, status: false };
				});
				state.questions[questionIndex].options = updatedOptionsList;
			}
			return { ...state };
		default:
			return state;
	}
};
