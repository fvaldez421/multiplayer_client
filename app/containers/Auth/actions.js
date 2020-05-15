/*
 *
 * Auth actions
 *
 */

import {
	DEFAULT_ACTION,
	SIGNUP_REQUEST,
	SIGNUP_RESULT,
	LOGIN_REQUEST,
	LOGIN_RESULT,
} from './constants';

export function defaultAction() {
	return {
		type: DEFAULT_ACTION,
	};
}

export function signupRequest(params) {
	return {
		params,
		type: SIGNUP_REQUEST,
	};
}

export function signupResult(res) {
	console.log(res.data);
	return {
		data: res?.data,
		type: SIGNUP_RESULT,
	};
}

export function loginRequest(params) {
	return {
		params,
		type: LOGIN_REQUEST,
	};
}

export function loginResult(res) {
	return {
		data: res?.data,
		type: LOGIN_RESULT,
	};
}
