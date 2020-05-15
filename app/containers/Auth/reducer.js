/*
 *
 * Auth reducer
 *
 */
import produce from 'immer';
import { setItem } from '../../utils/webStorage';
import { DEFAULT_ACTION, SIGNUP_RESULT } from './constants';

export const initialState = {
	username: '',
	tempUuid: '',
};

/* eslint-disable default-case, no-param-reassign */
const authReducer = (state = initialState, action) =>
	produce(state, (draft) => {
		switch (action.type) {
			case SIGNUP_RESULT:
				setItem('tempUuid', action?.data?.uuid);
				setItem('sessionToken', action?.data?.token);
				draft.username = action?.data?.username;
				draft.tempUuid = action?.data?.uuid;
				draft.sessionToken = action?.data?.token;
				break;
			case DEFAULT_ACTION:
				break;
		}
		return draft;
	});

export default authReducer;
