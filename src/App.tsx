import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// routes
import Home from '@routes/Home';

const App = () => {
	return (
		<Router>
			<Switch>
				<Route exact path='/' component={Home} />
			</Switch>
		</Router>
	);
};

export default App;
