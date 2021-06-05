import { Box, Flex, Text, Image } from '@chakra-ui/react';

const Header = () => {
	return (
		<Flex justifyContent="space-between" p={2} color="gray.100" bg="cyan.500">
			<Text fontSize="2xl">TurnQuiz</Text>
			<Flex alignItems="center">
				<Box w="25px" h="25px" bg="gray" borderRadius="50%">
					<Image src="/images/avatar.png" w="100%" h="100%" borderRadius="50%" />
				</Box>
				<Text mx={2}>shadrack</Text>
			</Flex>
		</Flex>
	);
};

export default Header;
