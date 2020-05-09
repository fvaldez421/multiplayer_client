import styled from 'styled-components';

export const BaseButton = styled.button`
	border: none;
	border-radius: 8px;
	background-color: lightgrey;
	color: #000000;
	height: 38px;
	font-size: 16px;
	font-weight: 600;
	line-height: 38px;
	padding: 0 15px;
	cursor: pointer;
	&:hover {
		filter: brightness(95%);
	}
	&:focus {
		outline: none;
	}
	&:active {
		filter: brightness(90%);
	}
`;
