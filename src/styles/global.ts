import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		outline: 0;
		text-decoration: none;
	}
	body {
		background-color: #f0f0f5;
		-webkit-font-smoothing: antialiased;
	}

	body,input,button {
		font: 16px Roboto, sans-serif;
	}
`;
