import styled from 'styled-components';
import { COLORS } from '../config/constants';

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
	outline: none;
	&:hover,
	&:focus {
		filter: brightness(95%);
	}
	&:active,
	&:focus:active {
		filter: brightness(90%);
	}
`;

export const PrimaryButton = styled(BaseButton)`
	background-color: ${COLORS.primaryBlue};
	color: #ffffff;
`;
