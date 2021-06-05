import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import Header from './components/Header';
import AppRouter from './router/AppRouter';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
	return (
		<ChakraProvider theme={theme}>
			<Router>
				<Header />
				<AppRouter />
			</Router>
		</ChakraProvider>
	);
}

export default App;
