import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';
import { Header } from './styles';
import githubLogo from '../../assets/github-logo.svg';

interface Params {
	repository: string;
}
export default function Repository(): JSX.Element {
	const {
		params: { repository },
	} = useRouteMatch<Params>();

	return (
		<Header>
			<img src={githubLogo} alt="Github Explorer" />
			<Link to="/">
				<FiChevronLeft size={16} />
				Voltar
			</Link>
		</Header>
	);
}
