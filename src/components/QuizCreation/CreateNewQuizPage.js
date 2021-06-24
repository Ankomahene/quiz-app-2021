import { useReducer } from 'react';
import { CreateQuizContext } from '../../state/context/context';
import { newQuizReducer } from '../../state/reducers/app';
import { getNewQuiz } from '../../state/metadata';
import { v4 as uuid } from 'uuid';
import CreateQuiz from './CreateQuiz';

const CreateNewQuizPage = () => {
	const [ quiz, dispatchNewQuizEvent ] = useReducer(newQuizReducer, getNewQuiz(uuid()));
	return (
		<CreateQuizContext.Provider value={{ quiz, dispatchNewQuizEvent }}>
			<CreateQuiz />
		</CreateQuizContext.Provider>
	);
};

export default CreateNewQuizPage;
