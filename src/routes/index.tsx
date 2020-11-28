import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';

export default function Routes(): JSX.Element {
	return (
		<Router>
			<Switch>
				<Route path="/" exact component={Dashboard} />
				<Route path="/" component={Repository} />
			</Switch>
		</Router>
	);
}
