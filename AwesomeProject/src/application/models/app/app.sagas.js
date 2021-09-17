import { takeEvery, put } from 'redux-saga/effects';
import {
  TOGGLE_IS_USER_AUTHENTICATED,
  TOGGLE_IS_USER_AUTHENTICATED_SUCCESS,
} from './app.actions';

function* handler() {
  yield takeEvery(TOGGLE_IS_USER_AUTHENTICATED, toggleIsUserAuthenticated);
}

function* toggleIsUserAuthenticated(action) {
  const { isUserAuthenticated } = action.payload;
  yield put({
    type: TOGGLE_IS_USER_AUTHENTICATED_SUCCESS,
    payload: {
      isUserAuthenticated,
    },
  });
}

export { handler };
