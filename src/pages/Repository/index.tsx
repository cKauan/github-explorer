import React, { useState, useEffect } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Header, RepositoryInfo, Issues } from './styles';
import githubLogo from '../../assets/github-logo.svg';
import Api from '../../services/api';

interface Params {
	repository: string;
}

interface IRepository {
	full_name: string;
	owner: {
		login: string;
		avatar_url: string;
	};
	description: string;
	stargazers_count: number;
	forks_count: number;
	open_issues_count: number;
}
interface IIssue {
	id: number;
	title: string;
	user: {
		login: string;
	};
	html_url: string;
}
export default function Repository(): JSX.Element {
	const {
		params: { repository },
	} = useRouteMatch<Params>();
	const [repositoryInfo, setRepositoryInfo] = useState<IRepository | null>(
		null,
	);
	const [issues, setIssues] = useState<IIssue[]>([]);

	useEffect(() => {
		Api.get(`repos/${repository}`).then(({ data }) => {
			setRepositoryInfo(data);
		});
		Api.get(`repos/${repository}/issues`).then(({ data }) => {
			setIssues(data);
		});
	}, [repository]);
	return (
		<>
			<Header>
				<img src={githubLogo} alt="Github Explorer" />
				<Link to="/">
					<FiChevronLeft size={16} />
					Voltar
				</Link>
			</Header>
			{repositoryInfo && (
				<RepositoryInfo>
					<header>
						<img
							src={repositoryInfo.owner.avatar_url}
							alt={repositoryInfo.owner.login}
						/>
						<div>
							<strong>{repositoryInfo.full_name}</strong>
							<p>{repositoryInfo.description}</p>
						</div>
					</header>
					<ul>
						<li>
							<strong>{repositoryInfo.stargazers_count}</strong>
							<span>Stars</span>
						</li>
						<li>
							<strong>{repositoryInfo.forks_count}</strong>
							<span>Forks</span>
						</li>
						<li>
							<strong>{repositoryInfo.open_issues_count}</strong>
							<span>Issues abertas</span>
						</li>
					</ul>
				</RepositoryInfo>
			)}
			<Issues>
				{issues.map(issue => (
					<a
						target="_blank"
						rel="noreferrer"
						href={issue.html_url}
						key={issue.id}
					>
						<div>
							<strong>{issue.title}</strong>
							<p>{issue.user.login}</p>
						</div>
						<FiChevronRight size={24} color="#cbcdb6" />
					</a>
				))}
			</Issues>
		</>
	);
}
