import { takeLatest, put } from 'redux-saga/effects';
import MasterApi from '../../api/MasterApi';
import { LOGIN_REQUEST, SIGNUP_REQUEST } from './constants';
import { loginResult, signupResult } from './actions';

// Individual exports for testing
export default function* authSaga() {
	yield takeLatest(SIGNUP_REQUEST, function* saga({ params }) {
		const res = yield MasterApi.post('/auth', params);
		yield put(signupResult(res));
		console.log(res);
	});
	yield takeLatest(LOGIN_REQUEST, function* saga({ params }) {
		const res = yield MasterApi.put('/auth', params);
		yield put(loginResult(res));
		console.log(res);
	});
}
