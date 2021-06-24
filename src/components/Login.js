import { Box, Text, Flex, Image, Button, Input } from '@chakra-ui/react';
import LoginImage from '../svg/login.svg';
import { Link } from 'react-router-dom';

const Login = () => {
	return (
		<Flex alignItems="center" justifyContent="center" h="92vh" bg="gray.100">
			<Flex w="600px" shadow="base" bg="white">
				<Flex justifyContent="center" flexDir="column" w="300px" h="400px" bg="cyan.500">
					<Box textAlign="center" color="gray.100">
						<Text fontSize="2xl">New Here?</Text>
						<Text fontSize="xs">Click on the button below to Create Account</Text>
						<Link to="/signup">
							<Button size="sm" my={3} bg="white" color="cyan.500">
								Create Account
							</Button>
						</Link>
					</Box>
					<Box>
						<Image src={LoginImage} alt="login logo" width="220px" height="220px" mx="auto" />
					</Box>
				</Flex>
				<Flex alignItems="center">
					<Box>
						<Text fontSize="2xl" textAlign="center" color="gray.600">
							Login
						</Text>
						<Box m={5}>
							<Text fontSize="sm" my={3}>
								Username
							</Text>
							<Input placeholder="enter your username" size="md" borderColor="cyan.500" />
							<Button colorScheme="cyan" size="sm" color="gray.100" my={3} px={5} w="100%">
								Login
							</Button>
						</Box>
					</Box>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default Login;
