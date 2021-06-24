import { ActionType } from '../../const/action-types';
import { optionReducer } from './option';
import { questionReducer } from './question';
import { quizReducer } from './quiz';

export const newQuizReducer = (state, action) => {
	switch (action.context) {
		case ActionType.quiz:
			return quizReducer(state, action);
		case ActionType.question:
			return questionReducer(state, action);
		case ActionType.option:
			return optionReducer(state, action);
		default:
			return state;
	}
};

export const appReducer = (state, action) => {
	switch (action.type) {
		case ActionType.newQuizQuestionSelected:
			const selectedQuestion = action.payload.selectedItem;
			return {
				...state,
				selectedNewQuizItemId: selectedQuestion.id,
				newQuizSelectedItem: { ...state.newQuizSelectedItem, itemType: 'question', question: selectedQuestion }
			};
		case ActionType.newQuizOptionSelected:
			const selectedItem = action.payload.selectedItem;
			return {
				...state,
				selectedNewQuizItemId: selectedItem.questionOption.id,
				newQuizSelectedItem: { ...state.newQuizSelectedItem, itemType: 'option', option: selectedItem }
			};
		default:
			return { ...state };
	}
};
