import React, { useState } from 'react';
import styled from 'styled-components';
import useComplexState from '../../hooks/useComplexState';
import { UniversalForm } from './Forms';
import {
	COLORS,
	BREAKPOINT_MOBILE_LARGE,
	REGEXPS,
} from '../../config/constants';
import AuthWrapper from '../Auth/AuthWrapper';

// ========== Styled Components ==========
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
	padding-bottom: 10px;
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
	color: ${COLORS.primaryBlue};
	font-weight: 600;
	user-select: none;
`;

// ========== Constants ===========
export const FORM_TYPES = {
	basic: 'basic',
	full: 'full',
	login: 'login',
};

const basicFormDefault = {
	username: '',
};

// ========== Helper Functions ===========
function validateFormFields(type, formState, onSuccess, onError) {
	const { username = '', password = '', confirm = '' } = formState;
	const errors = {
		username: null,
		password: null,
		confirm: null,
	};
	// on signup basic and full
	if (type !== FORM_TYPES.login) {
		if (username.match(REGEXPS.LOGIN_REGEXP)) {
			errors.username = '(Invalid characters in your username)';
		} else if (username.length < 5) {
			errors.username = '(Not long enough)';
		}
	}
	// only on signup full
	if (type === FORM_TYPES.full) {
		if (password.match(REGEXPS.LOGIN_REGEXP)) {
			errors.password = '(Invalid characters in your password)';
		} else if (password.length < 6) {
			errors.password = '(Not long enough)';
			errors.confirm = "(Passwords don't match)";
		}
		if (password !== confirm) {
			errors.confirm = "(Passwords don't match)";
		}
	}
	// checks if any keys in the error object are truthy
	for (const key in errors) {
		if (errors[key]) return onError(errors);
	}
	return onSuccess({});
}

// ============ React Components ==============
const AuthForm = ({ signupRequest, loginRequest }) => {
	const [formType, setFormType] = useState(FORM_TYPES.basic);
	const {
		state: formState,
		setState: setFormState,
		forceState: forceFormState,
	} = useComplexState({ ...basicFormDefault });
	const {
		state: errorState,
		setState: setErrorState,
		forceState: forceErrorState,
	} = useComplexState({});

	const updateFormType = (nextType) => {
		setFormType(nextType);
		forceErrorState({});
		const { username = '' } = formState;
		if (nextType === FORM_TYPES.basic) forceFormState({ username });
		if (nextType === FORM_TYPES.full)
			forceFormState({ username, password: '', confirm: '' });
		if (nextType === FORM_TYPES.login)
			forceFormState({ username, password: '' });
	};

	const updateFormField = (e) => {
		const { target: { name = '', value = '' } = {} } = e;
		const updatedState = {
			...formState,
			[name]: name === 'username' ? value.trim() : value,
		};
		if (errorState.attempted) {
			validateFormFields(
				formType,
				updatedState,
				forceErrorState,
				setErrorState,
			);
		}
		setFormState(updatedState);
	};

	const onFormSubmit = (e) => {
		e.preventDefault();
		const onSuccess = () => {
			if (formType !== FORM_TYPES.login) return signupRequest({ ...formState });
			return loginRequest({ ...formState });
		};
		const onError = (errors) => setErrorState({ ...errors, attempted: true });

		validateFormFields(formType, formState, onSuccess, onError);
	};

	const formTypeOption =
		formType === FORM_TYPES.login ? FORM_TYPES.basic : FORM_TYPES.login;
	const formTextOption = formType === FORM_TYPES.login ? 'Signup?' : 'Login?';

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
				errorState={errorState}
				onChange={updateFormField}
				onSubmit={onFormSubmit}
				updateFormType={updateFormType}
			/>
		</FormContainer>
	);
};

const WrappedAuthForm = (props) => (
	<AuthWrapper WrappedComponent={AuthForm} {...props} />
);

export default WrappedAuthForm;
