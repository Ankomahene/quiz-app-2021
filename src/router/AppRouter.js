import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home';
import CreatorDashboard from '../components/CreatorDashboard';
import Login from '../components/Login';
import QuizTaking from '../components/QuizTaking';
import Signup from '../components/Signup';

const AppRouter = () => {
	return (
		<Switch>
			<Route path="/" exact="true">
				<Home />
			</Route>
			<Route path="/login">
				<Login />
			</Route>
			<Route path="/signup">
				<Signup />
			</Route>
			<Route path="/creator/:creatorId">
				<CreatorDashboard />
			</Route>
			<Route path="/quiz/:quizId">
				<QuizTaking />
			</Route>
		</Switch>
	);
};

export default AppRouter;
