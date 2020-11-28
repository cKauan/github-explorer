import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import logoImg from '../../assets/github-logo.svg';
import { Title, Form, Repositories } from './styles';

export default function Dashboard(): JSX.Element {
	return (
		<>
			<img src={logoImg} alt="Github Explorer" />
			<Title>Explore repositórios no Github.</Title>
			<Form>
				<input type="text" placeholder="Digite o nome do repositório" />
				<button type="submit">Pesquisar</button>
			</Form>
			<Repositories>
				<a href="/">
					<img
						src="https://github.com/ckauan.png"
						alt="Carlos Kauãn"
					/>
					<div>
						<strong>ckauan/knex-crud</strong>
						<p>CRUD Postgres feito com knex.js</p>
					</div>
					<FiChevronRight size={24} color="#cbcdb6" />
				</a>
				<a href="/">
					<img
						src="https://github.com/ckauan.png"
						alt="Carlos Kauãn"
					/>
					<div>
						<strong>ckauan/knex-crud</strong>
						<p>CRUD Postgres feito com knex.js</p>
					</div>
					<FiChevronRight size={24} color="#cbcdb6" />
				</a>
				<a href="/">
					<img
						src="https://github.com/ckauan.png"
						alt="Carlos Kauãn"
					/>
					<div>
						<strong>ckauan/knex-crud</strong>
						<p>CRUD Postgres feito com knex.js</p>
					</div>
					<FiChevronRight size={24} color="#cbcdb6" />
				</a>
			</Repositories>
		</>
	);
}
