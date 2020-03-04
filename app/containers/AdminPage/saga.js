import { takeLatest, call, put, select } from 'redux-saga/effects';
import { load } from '../../utils/request';
import { ADMIN_LOAD_LOBBIES_REQUEST } from './constants';

// Individual exports for testing
export default function* homePageSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(ADMIN_LOAD_LOBBIES_REQUEST, function* (params) {
    console.log('load lobbies saga', params)
    yield call(
      load,
      '/lobbies',
      console.log,
      console.log
    )
  })
}
