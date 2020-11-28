import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';

export default function Routes(): JSX.Element {
	return (
		<Switch>
			<Route path="/" exact component={Dashboard} />
			<Route path="/repository" component={Repository} />
		</Switch>
	);
}
