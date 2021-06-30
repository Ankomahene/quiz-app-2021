import React from 'react';
import { Text, Flex } from '@chakra-ui/react';

const Option = ({ option, optionLabel, handleSelectOption, selectedOptionId }) => {
	return (
		<Flex key={option.id} alignItems="center" my={3}>
			<Text fontSize="lg" fontWeight="bold">
				{optionLabel}
			</Text>
			<Text
				onClick={() => handleSelectOption(option.id)}
				p="6px"
				w="550px"
				ml={2}
				border="1px"
				borderRadius="base"
				borderColor="cyan.400"
				cursor="pointer"
				background={selectedOptionId === option.id ? 'cyan.500' : ''}
				color={selectedOptionId === option.id ? 'gray.100' : ''}
				_hover={{
					backgroundColor: selectedOptionId === option.id ? 'cyan.500' : 'cyan.50',
					color: selectedOptionId === option.id ? 'gray.100' : 'gray.700'
				}}
			>
				{option.optionText}
			</Text>
		</Flex>
	);
};

export default Option;
