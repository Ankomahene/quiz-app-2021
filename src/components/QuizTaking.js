import { Box, Text, Flex, Progress } from '@chakra-ui/react';

const QuizTaking = () => {
	return (
		<Flex alignItems="center" justifyContent="center" flexDir="column" h="92vh" bg="gray.100">
			<Box>
				<Text fontSize="2xl" my={2}>
					Biology Quiz
				</Text>
				<Box shadow="base" bg="white" w="700px" h="500px" p={3}>
					<Flex justifyContent="space-evenly">
						<Flex alignItems="center" shadow="base" borderRadius="2xl" p={2}>
							<Text>Time Left:</Text>
							<Text fontSize="xl" color="cyan.500" mx={3} fontWeight="bold">
								00:15:30
							</Text>
						</Flex>
						<Flex alignItems="center" shadow="base" borderRadius="2xl" p={2}>
							<Box w="250px">
								<Progress hasStripe colorScheme="cyan" value={10} />
							</Box>
							<Text fontSize="xl" mx={3} fontWeight="bold">
								1/10
							</Text>
						</Flex>
					</Flex>
				</Box>
			</Box>
		</Flex>
	);
};

export default QuizTaking;
