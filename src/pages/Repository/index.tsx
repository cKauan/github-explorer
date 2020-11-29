import React from 'react';
import { useRouteMatch } from 'react-router-dom';

interface Params {
	repository: string;
}
export default function Repository(): JSX.Element {
	const {
		params: { repository },
	} = useRouteMatch<Params>();
	return <h1>{repository}</h1>;
}
