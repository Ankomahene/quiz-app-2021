import { Flex, Text, Box } from '@chakra-ui/react';
import { useContext } from 'react';
import { FaTimesCircle } from 'react-icons/fa';
import { ActionType } from '../../const/action-types';
import { CreateQuizContext } from '../../state/context/context';

const CreatedQuizQuestion = ({ number, question }) => {
	const { dispatchNewQuizEvent } = useContext(CreateQuizContext);

	const handleRemoveQuizQuestion = () => {
		dispatchNewQuizEvent({
			context: 'QUESTION',
			type: ActionType.removeQuestion,
			payload: { questionId: question.id }
		});
	};
	return (
		<Flex alignItems="center" justifyContent="space-between" bg="gray.100" p={3} borderRadius="5px" my={1}>
			<Flex alignItems="center">
				<Flex
					w="20px"
					h="20px"
					bg="gray.400"
					color="white"
					justifyContent="center"
					alignItems="center"
					borderRadius="50%"
				>
					{number}
				</Flex>
				<Text mx={2}>
					{question.questionText.length > 25 ? (
						`${question.questionText.slice(0, 25)}...`
					) : (
						question.questionText
					)}
				</Text>
			</Flex>
			<Box cursor="pointer" onClick={handleRemoveQuizQuestion}>
				<FaTimesCircle color="red" />
			</Box>
		</Flex>
	);
};

export default CreatedQuizQuestion;
