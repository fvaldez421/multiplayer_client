import { takeLatest } from 'redux-saga/effects';
import MasterApi from '../../api/MasterApi';
import { LOGIN_REQUEST, SIGNUP_REQUEST } from './constants';
import { loginResult, signupResult } from './actions';

// Individual exports for testing
export default function* authSaga() {
	yield takeLatest(SIGNUP_REQUEST, function* saga({ params }) {
		yield MasterApi.post('/auth', params, signupResult);
	});
	yield takeLatest(LOGIN_REQUEST, function* saga({ params }) {
		yield MasterApi.put('/auth', params, loginResult);
	});
}
