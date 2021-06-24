import { ActionType } from '../../const/action-types';

export const quizReducer = (state, action) => {
	const payload = action.payload;
	switch (action.type) {
		case ActionType.newQuiz:
			return payload.newQuiz;
		case ActionType.setQuizName:
			return { ...state, name: payload.name };
		case ActionType.setQuizDescription:
			return { ...state, description: payload.description };
		case ActionType.setIsPublished:
			return { ...state, isPublished: payload.isPublished };
		case ActionType.setQuizPoint:
			return { ...state, points: payload.points };
		case ActionType.setQuizDurationHour:
			return { ...state, duration: { ...state.duration, hr: payload.hr } };
		case ActionType.setQuizDurationMin:
			return { ...state, duration: { ...state.duration, min: payload.min } };
		case ActionType.setQuizDurationSec:
			return { ...state, duration: { ...state.duration, sec: payload.sec } };
		default:
			return state;
	}
};
