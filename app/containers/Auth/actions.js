/*
 *
 * Auth actions
 *
 */

import {
	SIGNUP_REQUEST,
	SIGNUP_RESULT,
	LOGIN_REQUEST,
	LOGIN_RESULT,
	RESTORE_SESSION,
	END_SESSION,
} from './constants';

export function restoreSession() {
	return {
		type: RESTORE_SESSION,
	};
}

export function endSession() {
	return {
		type: END_SESSION,
	};
}

export function signupRequest(params) {
	return {
		type: SIGNUP_REQUEST,
		params,
	};
}

export function signupResult(res) {
	return {
		type: SIGNUP_RESULT,
		data: res?.data,
	};
}

export function loginRequest(params) {
	return {
		type: LOGIN_REQUEST,
		params,
	};
}

export function loginResult(res) {
	return {
		type: LOGIN_RESULT,
		data: res?.data,
	};
}
