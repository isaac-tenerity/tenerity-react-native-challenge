import { takeEvery, call, put } from 'redux-saga/effects';
import { registerUserRequest } from '../../../infrastructure/api/user.api';
import { TOGGLE_IS_USER_AUTHENTICATED } from '../app/app.actions';
import {
  REGISTER_USER_REQUEST,
  REGISTER_USER_REQUEST_FAILED,
  REGISTER_USER_REQUEST_START,
  REGISTER_USER_REQUEST_SUCCESS,
} from './user.actions';

function* handler() {
  yield takeEvery(REGISTER_USER_REQUEST, registerUser);
}

function* registerUser(action) {
  try {
    yield put({ type: REGISTER_USER_REQUEST_START });
    let { name } = action.payload;
    let userInfo = {
      name,
      // normally the backend should handle the selected offers, and you should not send it from the frontend
      selectedOffers: [],
    };
    let registerUserResponse = yield call(registerUserRequest, userInfo);
    yield put({
      type: REGISTER_USER_REQUEST_SUCCESS,
      payload: {
        user: registerUserResponse?.data,
      },
    });
    yield put({
      type: TOGGLE_IS_USER_AUTHENTICATED,
      payload: {
        isUserAuthenticated: true,
      },
    });
  } catch (error) {
    console.log(error);
    yield put({
      type: REGISTER_USER_REQUEST_FAILED,
      payload: {
        error: `Could not register the user because of (${error.message})`,
      },
    });
  }
}

export { handler };
