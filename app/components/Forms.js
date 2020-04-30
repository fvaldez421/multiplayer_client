import styled from 'styled-components';
import { COLORS, BREAKPOINT_MOBILE_LARGE } from '../config/constants';

export const Form = styled.form`
	background-color: #ffffff;
	box-sizing: border-box;
	padding: 20px;
	border-radius: 8px;
	@media only screen and (max-width: ${BREAKPOINT_MOBILE_LARGE}px) {
		padding: 10px;
	}
`;
export const Label = styled.label`
	line-height: 24px;
`;

export const Input = styled.input`
	border: 1px solid lightgray;
	border-radius: 8px;
	width: 100%;
	height: 38px;
	margin: 5px 0;
	padding: 0 10px;
	line-height: 38px;
	font-size: 16px;
	outline: none;
	&:active,
	&:focus,
	&:focus:active {
		border-color: ${COLORS.lightblue};
	}
`;
