import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// routes
import Home from '@routes/Home';
import Projects from '@routes/Projects';
import Detail from '@routes/Detail';

const App = () => {
	return (
		<Router>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/projects' component={Projects} />
			</Switch>
			<Route path='/project/calculator' component={Detail} />
		</Router>
	);
};

export default App;
