import { Box, Text, Flex, Button } from '@chakra-ui/react';
import { BsArrowLeft } from 'react-icons/bs';
import NewQuizQuestion from './NewQuizQuestion';
import ShowAllQuestions from './ShowAllQuestions';
import NewQuizForm from './NewQuizForm';
import { BsArrowRightShort } from 'react-icons/bs';
import { useContext, useState } from 'react';
import { CreateQuizContext } from '../../state/context/context';

const CreateQuiz = () => {
	const { quiz } = useContext(CreateQuizContext);
	const [ visibility, setVisibility ] = useState(true);

	const handleNextAction = () => {
		if (quiz.name.trim() === '' || quiz.description.trim() === '') {
			alert('enter quiz name and description');
		} else {
			setVisibility(false);
		}
	};

	const handlePreviousAction = () => {
		setVisibility(true);
	};

	return (
		<Flex alignItems="center" justifyContent="center" flexDir="column" h="92vh" bg="gray.100">
			<Box>
				<Text fontSize="2xl" my={2}>
					Create Quiz
				</Text>
				<Box shadow="base" bg="white" w="600px" h="520px" p={3}>
					{visibility && (
						<Box>
							<NewQuizForm />
							<Box w="350px" mx="auto" my={5}>
								<Button colorScheme="cyan" color="gray.100" w="100%" onClick={handleNextAction}>
									Next <BsArrowRightShort color="white" size="20px" />
								</Button>
							</Box>
						</Box>
					)}
					{!visibility && (
						<Flex alignItems="center">
							<Button w="50px" mx={2} onClick={handlePreviousAction}>
								<BsArrowLeft size="30px" />
							</Button>
							<Box w="400px" px={2} mx={2} textAlign="center">
								<Text fontSize="2xl">{quiz.name}</Text>
								<Text fontSize="xs" fontStyle="italic" color="gray.500">
									{quiz.description.length > '60' ? (
										quiz.description.slice(0, 60) + '...'
									) : (
										quiz.description
									)}
								</Text>
							</Box>
							<Box>
								<ShowAllQuestions />
							</Box>
						</Flex>
					)}
					{!visibility && (
						<Box>
							<NewQuizQuestion />
						</Box>
					)}
				</Box>
			</Box>
		</Flex>
	);
};

export default CreateQuiz;
