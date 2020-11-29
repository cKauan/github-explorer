import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Header, RepositoryInfo, Issues } from './styles';
import githubLogo from '../../assets/github-logo.svg';

interface Params {
	repository: string;
}
export default function Repository(): JSX.Element {
	const {
		params: { repository },
	} = useRouteMatch<Params>();

	return (
		<>
			<Header>
				<img src={githubLogo} alt="Github Explorer" />
				<Link to="/">
					<FiChevronLeft size={16} />
					Voltar
				</Link>
			</Header>
			<RepositoryInfo>
				<header>
					<img src="https://github.com/ckauan.png" alt="" />
					<div>
						<strong>ckauan/ckauan</strong>
						<p>
							Back-end student 💻 NodeJS and Typescript |
							Self-taught
						</p>
					</div>
				</header>
				<ul>
					<li>
						<strong>1808</strong>
						<span>Stars</span>
					</li>
					<li>
						<strong>48</strong>
						<span>Forks</span>
					</li>
					<li>
						<strong>67</strong>
						<span>Issues abertas</span>
					</li>
				</ul>
			</RepositoryInfo>
			<Issues>
				<Link to="/">
					<div>
						<strong>Issue</strong>
						<p>description</p>
					</div>
					<FiChevronRight size={24} color="#cbcdb6" />
				</Link>
			</Issues>
		</>
	);
}
