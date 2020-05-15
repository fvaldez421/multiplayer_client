import React from 'react';
// import PropTypes from 'prop-types'
import styled from 'styled-components';
import { Form, Label, Input, FormError } from '../../components/Forms';
import { FORM_TYPES } from './AuthForm';
import { PrimaryButton } from '../../components/Buttons';
import {
	BREAKPOINT_MOBILE_LARGE,
	BREAKPOINT_MOBILE_SMALL,
} from '../../config/constants';

// ============= Constants =============
const INPUTS = {
	username: {
		label: 'Username',
		name: 'username',
		type: 'text',
	},
	password: {
		label: 'Password',
		name: 'password',
		type: 'password',
	},
	confirm: {
		label: 'Confirm Password',
		name: 'confirm',
		type: 'password',
	},
};

const FORM_DESCRIPTIONS = {
	basic: `With the basic signup, you'll be able to play, but wont be able to reuse claim you username or save
          any information. Don't worry though, your realtime gameplay will be saved as long as the game is live
          in case you're disconnected.`,
	full: `With the full signup, we'll confirm your email and save your username so we can save your scores for 
         you. This way you and your friends can look back at the good ol' days`,
	login: `You shouldn't have to log in too often, unless you manually log out or clear your browser data.`,
};

// =========== Styled Components =============
const FormWrapper = styled.div`
	background-color: #ffffff;
	border-radius: 8px;
	overflow: hidden;
`;

const PillContainer = styled.div`
	width: 100%;
	background-color: lightgrey;
	border-top-left-radius: 8px;
	border-top-right-radius: 8px;
	> div {
		display: inline-flex;
		vertical-align: middle;
		height: 50px;
		line-height: 50px;
		font-size: 24px;
		font-weight: 600;
		padding: 0 20px;
		@media only screen and (max-width: ${BREAKPOINT_MOBILE_LARGE}px) {
			height: 50px;
			line-height: 50px;
			padding: 0 10px;
			font-size: 18px;
		}
		@media only screen and (max-width: ${BREAKPOINT_MOBILE_SMALL}px) {
			font-size: 14px;
		}
	}
	> div:first-of-type {
		border-top-left-radius: 8px;
	}
	> div:last-of-type {
		border-top-right-radius: 8px;
	}
`;
const Pill = styled.div`
	position: relative;
	z-index: ${({ active }) => (active ? 1 : 0)};
	width: 50%;
	box-sizing: border-box;
	cursor: ${({ active }) => !active && 'pointer'};
	user-select: none;
	background-color: ${({ active }) => active && '#ffffff'};
	> div {
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
	}
	&:nth-of-type(1) {
		border-top-right-radius: ${({ active }) => active && '8px'};
		border-bottom-right-radius: ${({ active }) => !active && '8px'};
		&::before {
			content: '';
			z-index: ${({ active }) => (active ? 1 : 0)};
			position: absolute;
			border-bottom-left-radius: ${({ active }) => (active ? '8px' : 0)};
			background-color: ${({ active }) => (active ? 'lightgrey' : '#ffffff')};
			left: ${({ active }) => (active ? '100%' : 'calc(100% - 8px)')};
			right: ${({ active }) => (active ? '-8px' : '0')};
			height: 100%;
		}
	}
	&:nth-of-type(2) {
		border-top-left-radius: ${({ active }) => active && '8px'};
		border-bottom-left-radius: ${({ active }) => !active && '8px'};
		&::before {
			content: '';
			z-index: ${({ active }) => (active ? 1 : 0)};
			position: absolute;
			border-bottom-right-radius: ${({ active }) => (active ? '8px' : 0)};
			background-color: ${({ active }) => (active ? 'lightgrey' : '#ffffff')};
			right: ${({ active }) => (active ? '100%' : 'calc(100% - 8px)')};
			left: ${({ active }) => (active ? '-8px' : '0')};
			height: 100%;
		}
	}
`;
const PillShadow = styled.div`
	width: 8px;
	padding: 0 !important;
	background-color: #ffffff;
`;

const StyledForm = styled(Form)`
	border-top-left-radius: ${({ hasHeader }) => (hasHeader ? 'unset' : '8px')};
	border-top-right-radius: ${({ hasHeader }) => (hasHeader ? 'unset' : '8px')};
	> input {
		margin-bottom: 15px;
	}
	> input:last-of-type {
		margin-bottom: 20px;
	}
`;

const FormDescription = styled(
	({ className = '', activeTab = FORM_TYPES.basic }) => (
		<div className={className}>{FORM_DESCRIPTIONS[activeTab]}</div>
	),
)`
	padding: 25px 20px 0;
`;

// ============ React Components ==============
const FormToggle = ({ activeTab = FORM_TYPES.basic, onUpdate }) => (
	<PillContainer>
		<Pill
			id="basic-form-toggle"
			active={activeTab === FORM_TYPES.basic}
			onClick={() => onUpdate(FORM_TYPES.basic)}
		>
			<div>Easy Signup</div>
		</Pill>
		<Pill
			id="full-form-toggle"
			active={activeTab === FORM_TYPES.full}
			onClick={() => onUpdate(FORM_TYPES.full)}
		>
			<div>Full Signup</div>
		</Pill>
	</PillContainer>
);

const FormBuilder = ({
	isLogin,
	signupType,
	formState = {},
	errorState = {},
	onChange,
	onSubmit,
}) => {
	const showPwField = isLogin || signupType === FORM_TYPES.full;
	const fields = [INPUTS.username];

	if (showPwField) fields.push(INPUTS.password);
	if (signupType === FORM_TYPES.full) fields.push(INPUTS.confirm);

	return (
		<StyledForm hasHeader onSubmit={onSubmit}>
			{fields.map(({ label, name, type }) => (
				<>
					<Label key={`${name}-label`} htmlFor={name}>
						{label}
						{errorState[name] && (
							<FormError>&nbsp;{errorState[name]}</FormError>
						)}
					</Label>
					<Input
						key={`${name}-input`}
						id={name}
						name={name}
						type={type}
						placeholder={name}
						value={formState[name]}
						onChange={onChange}
						hasError={!!errorState[name]}
					/>
				</>
			))}
			<PrimaryButton id="FormSubmit" type="submit">
				Login
			</PrimaryButton>
		</StyledForm>
	);
};

FormBuilder.propTypes = {};

export const UniversalForm = ({
	className = '',
	formType: activeTab,
	updateFormType,
	...rest
}) => {
	const isLogin = activeTab === FORM_TYPES.login;
	return (
		<FormWrapper className={className}>
			{isLogin ? (
				<PillContainer>
					<Pill active>Login</Pill>
					<PillShadow />
				</PillContainer>
			) : (
				<FormToggle activeTab={activeTab} onUpdate={updateFormType} />
			)}
			<FormDescription activeTab={activeTab} />
			<FormBuilder isLogin={isLogin} signupType={activeTab} {...rest} />
		</FormWrapper>
	);
};

UniversalForm.propTypes = {};
