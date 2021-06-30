import { useState } from 'react';
import { Box, Button, Text, Flex, Progress } from '@chakra-ui/react';
import { BsArrowRightShort } from 'react-icons/bs';
import { optionsLabels } from './QuizCreation/NewQuizQuestion';
import CountdownTimer from 'react-component-countdown-timer';

const exampleQuiz = {
	name: 'Sample Quiz Name',
	description: 'Lorem ipsum dolor sit amet consecteted',
	isPublished: true,
	duration: '00:30:00',
	points: '40',
	questions: [
		{
			id: '1232',
			questionText: 'Question 1 goes here',
			optionsLabelType: 'alpha',
			options: [
				{
					id: '3456232',
					optionText: 'Option 1',
					status: false
				},
				{
					id: '7067323',
					optionText: 'Option 2',
					status: false
				},
				{
					id: '6733329',
					optionText: 'Option 3',
					status: true
				},
				{
					id: '123433',
					optionText: 'Option 4',
					status: false
				}
			]
		},
		{
			questionText: 'Question 2 goes here',
			optionsLabelType: 'alpha',
			options: [
				{
					id: '456789',
					optionText: 'Option A',
					status: false
				},
				{
					id: '1000789',
					optionText: 'Option B',
					status: true
				},
				{
					id: '9886789',
					optionText: 'Option C',
					status: false
				},
				{
					id: '45632229',
					optionText: 'Option D',
					status: false
				}
			]
		}
	]
};

const QuizTaking = () => {
	const [ quiz ] = useState(exampleQuiz);
	const [ currentQuestion, setCurrentQuestion ] = useState(0);

	const handleNextQuestion = () => {
		setCurrentQuestion(value => value + 1);
	};

	const handleTimeUp = () => {
		console.log('time up');
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
									count={2345}
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
					<Box bg="gray.50" p={3} m={5} h="120px" overflowY="auto">
						{quiz.questions[currentQuestion].questionText}
					</Box>
					<Box w="600px" mx="auto" h="270px" px={2} overflowY="auto">
						{quiz.questions[currentQuestion].options.map((option, index) => (
							<Flex key={option.id} alignItems="center" my={3}>
								<Text fontSize="lg" fontWeight="bold">
									{optionsLabels[quiz.questions[currentQuestion].optionsLabelType][index]}
								</Text>
								<Text
									p="6px"
									w="550px"
									ml={2}
									border="1px"
									borderRadius="base"
									borderColor="cyan.400"
									cursor="pointer"
									_hover={{
										backgroundColor: 'cyan.50',
										color: 'gray.700'
									}}
								>
									{option.optionText}
								</Text>
							</Flex>
						))}
					</Box>
					<Box w="200px" mx="auto" mt={2}>
						{currentQuestion === quiz.questions.length - 1 ? (
							'End of Questions'
						) : (
							<Button
								onClick={handleNextQuestion}
								colorScheme="cyan"
								color="gray.100"
								borderRadius="full"
								size="sm"
								w="100%"
							>
								Next <BsArrowRightShort color="white" size="20px" />
							</Button>
						)}
					</Box>
				</Box>
			</Box>
		</Flex>
	);
};

export default QuizTaking;
