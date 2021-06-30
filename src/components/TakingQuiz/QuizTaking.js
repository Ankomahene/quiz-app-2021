import { useState } from 'react';
import { Box, Text, Flex, Progress } from '@chakra-ui/react';
import { BsArrowRightShort } from 'react-icons/bs';
import { optionsLabels } from '../QuizCreation/NewQuizQuestion';
import CountdownTimer from 'react-component-countdown-timer';
import { exampleQuiz } from './mock-quiz';
import Option from './Option';
import ActionButton from './ActionButton';

const QuizTaking = () => {
	const [ quiz ] = useState(exampleQuiz);
	const [ currentQuestion, setCurrentQuestion ] = useState(0);
	const [ selectedOptionId, setSelectedOptionId ] = useState('');

	const handleNextQuestion = () => {
		if (selectedOptionId.trim() === '') {
			alert('select an option');
			return;
		}
		setCurrentQuestion(value => value + 1);
		setSelectedOptionId('');
	};

	const handleTimeUp = () => {
		console.log('time up');
	};

	const handleSelectOption = id => {
		setSelectedOptionId(id);
	};

	const handleCompleteQuiz = () => {
		if (selectedOptionId.trim() === '') {
			alert('select an option');
			return;
		}
		console.log('completed');
	};

	return (
		<Flex alignItems="center" justifyContent="center" flexDir="column" h="92vh" bg="gray.100">
			<Box>
				<Text fontSize="2xl" my={2}>
					{quiz.name}
				</Text>
				<Box shadow="base" bg="white" w="700px" h="540px" p={3}>
					<Flex justifyContent="space-evenly">
						<Flex alignItems="center" shadow="base" borderRadius="2xl" p={2}>
							<Text>Time Left:</Text>
							<Text fontSize="xl" color="cyan.500" mx={3} fontWeight="bold">
								<CountdownTimer
									count={1600}
									className="timer"
									color="#3BB6C7"
									hideDay
									onEnd={handleTimeUp}
								/>
								{/* {quiz.duration} */}
							</Text>
						</Flex>
						<Flex alignItems="center" shadow="base" borderRadius="2xl" p={2}>
							<Box w="250px">
								<Progress hasStripe colorScheme="cyan" value={10} />
							</Box>
							<Text fontSize="xl" mx={3} fontWeight="bold">
								{currentQuestion + 1}/{quiz.questions.length}
							</Text>
						</Flex>
					</Flex>
					<Box bg="gray.50" p={3} m={5} maxH="120px" overflowY="auto">
						{quiz.questions[currentQuestion].questionText}
					</Box>
					<Box w="600px" mx="auto" maxH="270px" px={2} overflowY="auto">
						{quiz.questions[currentQuestion].options.map((option, index) => (
							<Option
								key={option.id}
								option={option}
								optionLabel={optionsLabels[quiz.questions[currentQuestion].optionsLabelType][index]}
								handleSelectOption={handleSelectOption}
								selectedOptionId={selectedOptionId}
							/>
						))}
					</Box>
					<Box w="200px" mx="auto" mt={2}>
						{currentQuestion === quiz.questions.length - 1 ? (
							<ActionButton label="Finish" handleOnClickEvent={handleCompleteQuiz} />
						) : (
							<ActionButton handleOnClickEvent={handleNextQuestion} label="Next">
								<BsArrowRightShort color="white" size="20px" />
							</ActionButton>
						)}
					</Box>
				</Box>
			</Box>
		</Flex>
	);
};

export default QuizTaking;
