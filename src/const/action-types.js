export const ActionType = {
	// General related action
	newQuizQuestionSelected: 'NEW_QUIZ_QUESTION_SELECTED',
	newQuizOptionSelected: 'NEW_QUIZ_OPTION_SELECTED',

	quiz: 'QUIZ',
	question: 'QUESTION',
	option: 'OPTION',

	// quiz related actions
	newQuiz: 'SET_NEW_QUIZ',
	setQuizName: 'SET_QUIZ_NAME',
	setQuizDescription: 'SET_QUIZ_DESCRIPTION',
	setIsPublished: 'SET_IS_PUBLISHED',
	setQuizPoint: 'SET_QUIZ_POINT',
	setQuizDurationHour: 'SET_QUIZ_DURATION_HOUR',
	setQuizDurationMin: 'SET_QUIZ_DURATION_MIN',
	setQuizDurationSec: 'SET_QUIZ_DURATION_SEC',

	// questions related actions
	newQuestion: 'NEW_QUESTION',
	removeQuestion: 'REMOVE_QUESTION',
	setQuestionText: 'SET_QUESTION_TEXT',
	setQuestionOptionsLabelType: 'SET_QUESTION_OPTIONS_LABEL_TYPE',

	// Question options related actions
	newOption: 'ADD_NEW_OPTION',
	removeOption: 'REMOVE_OPTION',
	setOptionText: 'SET_OPTION_TEXT',
	setOptionStatus: 'SET_OPTION_STATUS'
};
