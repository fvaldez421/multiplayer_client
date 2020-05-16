/*
 *
 * Auth reducer
 *
 */
import produce from 'immer';
import { setAuth, getAuth } from '../../utils/webStorage';
import {
	DEFAULT_ACTION,
	SIGNUP_RESULT,
	RESTORE_SESSION,
	END_SESSION,
} from './constants';

export const initialState = {
	username: '',
	uuid: '',
	message: '',
};

/* eslint-disable default-case, no-param-reassign */
const authReducer = (state = initialState, action = { data: {} }) =>
	produce(state, (draft) => {
		switch (action.type) {
			case SIGNUP_RESULT:
				setAuth(action?.data);
				draft = { ...draft, ...action.data };
				break;
			case RESTORE_SESSION:
				const { username, uuid, token } = getAuth();
				if (token || uuid) draft = { ...draft, username, uuid, token };
				break;
			case END_SESSION:
				setAuth({});
				draft = {};
				break;
			case DEFAULT_ACTION:
				break;
		}
		return draft;
	});

export default authReducer;
