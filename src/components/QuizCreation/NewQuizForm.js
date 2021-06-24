import {
	Box,
	Flex,
	Input,
	NumberInput,
	NumberInputField,
	NumberInputStepper,
	NumberIncrementStepper,
	NumberDecrementStepper,
	Text,
	Textarea
} from '@chakra-ui/react';
import { useContext } from 'react';
import { ActionType } from '../../const/action-types';
import { CreateQuizContext } from '../../state/context/context';

const NewQuizForm = () => {
	const { quiz, dispatchNewQuizEvent } = useContext(CreateQuizContext);

	const handleSetQuizName = name => {
		dispatchNewQuizEvent({ context: 'QUIZ', type: ActionType.setQuizName, payload: { name } });
	};

	const handleSetQuizDescription = description => {
		dispatchNewQuizEvent({ context: 'QUIZ', type: ActionType.setQuizDescription, payload: { description } });
	};

	const handleSetQuizPoints = points => {
		dispatchNewQuizEvent({ context: 'QUIZ', type: ActionType.setQuizPoint, payload: { points } });
	};

	const handleSetQuizDurationHour = hr => {
		dispatchNewQuizEvent({ context: 'QUIZ', type: ActionType.setQuizDurationHour, payload: { hr } });
	};
	const handleSetQuizDurationMin = min => {
		dispatchNewQuizEvent({ context: 'QUIZ', type: ActionType.setQuizDurationMin, payload: { min } });
	};
	const handleSetQuizDurationSec = sec => {
		dispatchNewQuizEvent({ context: 'QUIZ', type: ActionType.setQuizDurationSec, payload: { sec } });
	};

	return (
		<Box>
			<Box w="350px" mx="auto" my={2}>
				<Text fontSize="sm" my={1}>
					Quiz Name
				</Text>
				<Input size="sm" value={quiz.name} onChange={e => handleSetQuizName(e.target.value)} />
			</Box>

			<Box w="350px" mx="auto" my={2}>
				<Text fontSize="sm" my={1}>
					Description
				</Text>
				<Textarea value={quiz.description} onChange={e => handleSetQuizDescription(e.target.value)} />
			</Box>
			<Box w="350px" mx="auto" my={2}>
				<Text fontSize="sm" my={1}>
					Timer (h : m : s)
				</Text>
				<Flex alignItems="center">
					<Input
						value={quiz.duration.hr}
						onChange={e => handleSetQuizDurationHour(e.target.value)}
						size="md"
						fontSize="lg"
						mr={3}
						textAlign="center"
					/>
					:
					<Input
						value={quiz.duration.min}
						onChange={e => handleSetQuizDurationMin(e.target.value)}
						size="md"
						fontSize="lg"
						mx={3}
						textAlign="center"
					/>
					:
					<Input
						value={quiz.duration.sec}
						onChange={e => handleSetQuizDurationSec(e.target.value)}
						size="md"
						fontSize="lg"
						ml={3}
						textAlign="center"
					/>
				</Flex>
			</Box>

			<Box w="350px" mx="auto" my={2}>
				<Text fontSize="sm" my={1}>
					Points
				</Text>
				<NumberInput
					size="md"
					maxW={24}
					value={quiz.points}
					min={1}
					onChange={value => handleSetQuizPoints(value)}
				>
					<NumberInputField />
					<NumberInputStepper>
						<NumberIncrementStepper />
						<NumberDecrementStepper />
					</NumberInputStepper>
				</NumberInput>
			</Box>
		</Box>
	);
};

export default NewQuizForm;
