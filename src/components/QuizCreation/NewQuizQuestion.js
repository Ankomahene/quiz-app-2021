import { useContext, useState } from 'react';
import { Box, Text, Flex, Input, Select, Button, useToast } from '@chakra-ui/react';
import { FaTimesCircle, FaPlus } from 'react-icons/fa';
import { getNewOption } from '../../state/metadata';
import { v4 as uuid } from 'uuid';
import { MdRadioButtonChecked } from 'react-icons/md';
import { HiBadgeCheck } from 'react-icons/hi';
import { CreateQuizContext } from '../../state/context/context';
import { ActionType } from '../../const/action-types';

const optionsLabels = {
	alpha: [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J' ],
	roman: [ 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X' ]
};

const NewQuizQuestion = () => {
	const { dispatchNewQuizEvent } = useContext(CreateQuizContext);
	const toast = useToast();
	const [ questionText, setQuestionText ] = useState('');
	const [ optionsLabel, setOptionsLabel ] = useState('alpha');
	const [ options, setOptions ] = useState([ getNewOption(uuid()) ]);

	const handleQuestionSave = () => {
		if (questionText.trim() === '') {
			toast(toastConfig(`please enter question`, 'error'));
			return;
		}
		if (options.length < 2) {
			toast(toastConfig(`please add at least two options`, 'error'));
			return;
		}
		const hasOneCorrectOption = options.some(option => option.status === true);
		if (!hasOneCorrectOption) {
			toast(toastConfig(`please choose the correct option`, 'error'));
			return;
		}

		const newQuestion = { id: uuid(), questionText, optionsLabelType: optionsLabel, options };
		dispatchNewQuizEvent({
			context: 'QUESTION',
			type: ActionType.newQuestion,
			payload: { newQuestion }
		});
		toast(toastConfig('Question Added successfully', 'success'));
		reset();
	};

	const handleAddNewOption = () => {
		if (options.length !== 10) {
			setOptions([ ...options, getNewOption(uuid()) ]);
		}
	};

	const handleOptionTextChange = (id, text) => {
		const updatedOptions = options.map(option => (option.id === id ? { ...option, optionText: text } : option));
		setOptions(updatedOptions);
	};

	const handleOptionStatusChange = id => {
		const updatedOptions = options.map(
			option => (option.id === id ? { ...option, status: true } : { ...option, status: false })
		);
		setOptions(updatedOptions);
	};

	const handleRemoveQuestionOption = id => {
		setOptions(options.filter(option => option.id !== id));
	};

	const reset = () => {
		setQuestionText('');
		setOptions([ getNewOption(uuid()) ]);
	};

	const toastConfig = (title, status) => ({ title, status, isClosable: true });

	return (
		<Box>
			<Box w="350px" mx="auto" my={2}>
				<Text fontSize="xl" borderBottom="1px" borderColor="gray.200" pt={3}>
					Add Questions
				</Text>
			</Box>
			<Box w="350px" mx="auto" my={2}>
				<Text fontSize="sm" my={1}>
					Question
				</Text>
				<Input size="sm" value={questionText} onChange={e => setQuestionText(e.target.value)} />
			</Box>
			<Box w="350px" mx="auto" my={2}>
				<Text fontSize="sm" my={1}>
					Options Label
				</Text>
				<Select w="150px" size="sm" value={optionsLabel} onChange={e => setOptionsLabel(e.target.value)}>
					<option value="alpha">ABC</option>
					<option value="roman">I II III</option>
				</Select>
			</Box>
			<Box w="350px" mx="auto" my={2}>
				<Text fontSize="sm" my={1}>
					Options
				</Text>
				<Box border="1px" borderColor="gray.200" padding={3} maxH="180px" overflowY="auto">
					{options.map((option, index) => (
						<Flex key={option.id} alignItems="center" my={2}>
							<Text mx={3}> {optionsLabels[optionsLabel][index]} </Text>
							{option.status ? (
								<Box as="button" mx={1} color="green.500" borderRadius="50%">
									<HiBadgeCheck />
								</Box>
							) : (
								<Box
									onClick={() => handleOptionStatusChange(option.id)}
									as="button"
									mx={1}
									borderRadius="50%"
									color="cyan.600"
								>
									<MdRadioButtonChecked />
								</Box>
							)}
							<Input
								size="sm"
								value={option.optionText}
								onChange={e => handleOptionTextChange(option.id, e.target.value)}
							/>
							<Box onClick={() => handleRemoveQuestionOption(option.id)} cursor="pointer" mx={1}>
								<FaTimesCircle color="red" />
							</Box>
						</Flex>
					))}
					<Box textAlign="right" mt={3} pr="25px">
						<Button onClick={handleAddNewOption} size="xs" colorScheme="cyan" color="gray.100" px={3}>
							<FaPlus />
						</Button>
					</Box>
				</Box>

				<Box w="350px" mx="auto" my={2}>
					<Button size="sm" bg="cyan.400" color="gray.100" onClick={handleQuestionSave}>
						Save Question
					</Button>
				</Box>
			</Box>
		</Box>
	);
};

export default NewQuizQuestion;
