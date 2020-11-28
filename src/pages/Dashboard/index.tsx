import React, { FormEvent, useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import logoImg from '../../assets/github-logo.svg';
import { Title, Form, Repositories } from './styles';
import Api from '../../services/api';

interface Repository {
	full_name: string;
	owner: {
		login: string;
		avatar_url: string;
	};
	description: string;
}
export default function Dashboard(): JSX.Element {
	const [repositoryInput, setRepositoryInput] = useState('');
	const [repositories, setRepositories] = useState<Repository[]>([]);

	async function handleAddRepository(
		event: FormEvent<HTMLFormElement>,
	): Promise<void> {
		event.preventDefault();
		setRepositoryInput('');
		const { data } = await Api.get<Repository>(`repos/${repositoryInput}`);
		setRepositories([...repositories, data]);
	}
	return (
		<>
			<img src={logoImg} alt="Github Explorer" />
			<Title>Explore repositórios no Github.</Title>
			<Form onSubmit={handleAddRepository}>
				<input
					type="text"
					value={repositoryInput}
					onChange={({ target }) => setRepositoryInput(target.value)}
					placeholder="Digite o nome do repositório"
				/>
				<button type="submit">Pesquisar</button>
			</Form>
			<Repositories>
				<a
					target="_blank"
					rel="noreferrer"
					href="https://github.com/ckauan"
				>
					<img
						src="https://github.com/ckauan.png"
						alt="Carlos Kauãn"
					/>
					<div>
						<strong>ckauan</strong>
						<p>
							Back-end student 💻 NodeJS and Typescript |
							Self-taught
						</p>
					</div>
					<FiChevronRight size={24} color="#cbcdb6" />
				</a>
				{repositories.map(({ full_name, description, owner }) => (
					<a href="/" key={full_name}>
						<img src={owner.avatar_url} alt={owner.login} />
						<div>
							<strong>{full_name}</strong>
							<p>{description}</p>
						</div>
						<FiChevronRight size={24} color="#cbcdb6" />
					</a>
				))}
			</Repositories>
		</>
	);
}
