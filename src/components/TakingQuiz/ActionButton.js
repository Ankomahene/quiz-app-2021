import { Button } from '@chakra-ui/react';
import React from 'react';

const ActionButton = ({ label, handleOnClickEvent, children }) => {
	return (
		<Button onClick={handleOnClickEvent} colorScheme="cyan" color="gray.100" borderRadius="full" size="sm" w="100%">
			{label} {children}
		</Button>
	);
};

export default ActionButton;
