import React, { useState } from 'react';
import styled from 'styled-components';
import useComplexState from '../../hooks/useComplexState';
import { UniversalForm } from './Forms';
import { COLORS, BREAKPOINT_MOBILE_LARGE } from '../../config/constants';

const FormContainer = styled.div`
	background-color: rgba(255, 255, 255, 0.8);
	display: block;
	width: 100%;
	max-width: 1092px;
	margin: auto;
	padding: 20px;
	border-radius: 8px;
	@media only screen and (max-width: ${BREAKPOINT_MOBILE_LARGE}px) {
		padding: 10px;
	}
`;

const FormHeader = styled.div`
	> div {
		display: flex;
		flex-direction: row;
		* {
			display: inline-block;
			height: 36px;
			line-height: 36px;
		}
		> h2 {
			flex: 1 1;
		}
	}
	> p {
		width: 100%;
		padding: 10px 0;
	}
`;

const LoginBtn = styled.span`
	cursor: pointer;
	color: ${COLORS.strongBlue};
	font-weight: 600;
	user-select: none;
`;

export const FORMS = {
	basic: 'basic',
	full: 'full',
	login: 'login',
};

const basicFormDefault = {
	username: '',
};

const AuthForm = () => {
	const [formType, setFormType] = useState(FORMS.basic);
	const { state: formState, setState: setFormState } = useComplexState({
		...basicFormDefault,
	});

	const updateFormType = (nextType) => {
		setFormType(nextType);
		const { username = '' } = formState;
		if (nextType === FORMS.basic) setFormState({ username });
		if (nextType === FORMS.full)
			setFormState({ username, password: '', confirm: '' });
		if (nextType === FORMS.login) setFormState({ username, password: '' });
	};

	const updateFormField = (e) => {
		const {
			target: { name, value },
		} = e;
		setFormState({ [name]: value });
	};

	const onFormSubmit = (e) => {
		e.preventDefault();
	};

	const formTypeOption = formType === FORMS.login ? FORMS.basic : FORMS.login;
	const formTextOption = formType === FORMS.login ? 'Signup?' : 'Login?';

	return (
		<FormContainer>
			<FormHeader>
				<div>
					<h2>Lets get you set up</h2>
					<LoginBtn onClick={() => updateFormType(formTypeOption)}>
						{formTextOption}
					</LoginBtn>
				</div>
				<p>
					All you need is a username to get started! You wont need an email or
					password unless you want to save your stats.
				</p>
			</FormHeader>
			<UniversalForm
				formType={formType}
				formState={formState}
				onChange={updateFormField}
				onSubmit={onFormSubmit}
				updateFormType={updateFormType}
			/>
		</FormContainer>
	);
};

export default AuthForm;
