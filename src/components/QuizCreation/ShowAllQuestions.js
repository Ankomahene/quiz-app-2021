import React, { useContext } from 'react';
import {
	Button,
	Box,
	Drawer,
	DrawerBody,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	useDisclosure
} from '@chakra-ui/react';
import CreatedQuizQuestion from './CreatedQuizQuestion';
import { CreateQuizContext } from '../../state/context/context';

function ShowAllQuestions() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = React.useRef();
	const { quiz } = useContext(CreateQuizContext);

	return (
		<Box>
			<Button
				ref={btnRef}
				size="sm"
				colorScheme="cyan"
				color="white"
				display="flex"
				justifyContent="center"
				alignItems="center"
				borderRadius="50%"
				p="0px"
				onClick={onOpen}
			>
				{quiz.questions.length}
			</Button>
			<Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={btnRef}>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerHeader borderBottom="1px" borderColor="gray.100">
						Quiz Questions
					</DrawerHeader>

					<DrawerBody>
						{quiz.questions.map((question, index) => (
							<CreatedQuizQuestion key={question.id} question={question} number={index + 1} />
						))}
					</DrawerBody>

					<DrawerFooter>
						<Button variant="outline" mr={3} onClick={onClose}>
							Close
						</Button>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</Box>
	);
}

export default ShowAllQuestions;
