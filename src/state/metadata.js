export const getNewOption = id => {
	return {
		id,
		optionText: 'Option Text',
		status: false
	};
};

export const getNewQuestion = id => {
	return {
		id,
		questionText: 'New Question',
		optionsLabelType: 'alpha',
		options: []
	};
};

export const getNewQuiz = id => {
	return {
		id,
		name: '',
		description: '',
		isPublished: false,
		points: 30,
		duration: { hr: '00', min: '30', sec: '00' },
		questions: []
	};
};
