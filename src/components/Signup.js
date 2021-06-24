import { Box, Text, Flex, Image, Button, Input, Select } from '@chakra-ui/react';
import RegisterImage from '../svg/register.svg';
import { Link } from 'react-router-dom';

const Signup = () => {
	return (
		<Flex alignItems="center" justifyContent="center" h="92vh" bg="gray.100">
			<Flex w="600px" shadow="base" bg="white">
				<Flex justifyContent="center" flexDir="column" w="300px" h="400px" bg="cyan.500">
					<Box textAlign="center" color="gray.100">
						<Text fontSize="2xl">Already a User?</Text>
						<Text fontSize="xs">Click on the button below to Login</Text>
						<Link to="/login">
							<Button size="sm" my={3} bg="white" color="cyan.500">
								Login
							</Button>
						</Link>
					</Box>
					<Box>
						<Image
							border="1px"
							borderColor="gray.100"
							src={RegisterImage}
							alt="login logo"
							width="220px"
							height="220px"
							mx="auto"
						/>
					</Box>
				</Flex>
				<Flex alignItems="center">
					<Box>
						<Text fontSize="2xl" textAlign="center" color="gray.600">
							Create Account
						</Text>
						<Box m={5}>
							<Text fontSize="sm" my={3}>
								Username
							</Text>
							<Input placeholder="enter your username" size="md" borderColor="cyan.500" />

							<Text fontSize="sm" my={3}>
								Account type
							</Text>
							<Select borderColor="cyan.500">
								<option value="option1">User</option>
								<option value="option2">Creator</option>
							</Select>
							<Button colorScheme="cyan" size="sm" color="gray.100" my={3} px={5} w="100%">
								Create Account
							</Button>
						</Box>
					</Box>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default Signup;
