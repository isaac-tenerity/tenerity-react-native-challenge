import { takeEvery, call, put, all } from 'redux-saga/effects';
import {
  getUserInfoRequest,
  registerUserRequest,
  getUserSelectedOffersRequest,
} from '../../../infrastructure/api/user.api';
import { TOGGLE_IS_USER_AUTHENTICATED } from '../app/app.actions';
import {
  GET_SELECTED_OFFERS,
  GET_SELECTED_OFFERS_FAILED,
  GET_SELECTED_OFFERS_START,
  GET_SELECTED_OFFERS_SUCCESS,
  REGISTER_USER_REQUEST,
  REGISTER_USER_REQUEST_FAILED,
  REGISTER_USER_REQUEST_START,
  REGISTER_USER_REQUEST_SUCCESS,
} from './user.actions';

function* handler() {
  yield takeEvery(REGISTER_USER_REQUEST, registerUser);
  yield takeEvery(GET_SELECTED_OFFERS, getSelectedOffers);
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
    console.log('registerUserResponse ', registerUserResponse?.data);
    yield all([
      put({
        type: TOGGLE_IS_USER_AUTHENTICATED,
        payload: {
          isUserAuthenticated: true,
        },
      }),
      put({
        type: REGISTER_USER_REQUEST_SUCCESS,
        payload: {
          user: registerUserResponse?.data,
        },
      }),
    ]);
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

function* getSelectedOffers(action) {
  try {
    yield put({ type: GET_SELECTED_OFFERS_START });
    let { id } = action.payload;
    // get user info
    let getUserInfoResponse = yield call(getUserInfoRequest, id);
    // get user selected offers
    let { selectedOffers } = getUserInfoResponse?.data;

    if (selectedOffers.length > 0) {
      // i would do this on the backend side with joining the user table with the offers
      let getSelectedOffersResponse = yield call(
        getUserSelectedOffersRequest,
        selectedOffers
      );
      yield put({
        type: GET_SELECTED_OFFERS_SUCCESS,
        payload: {
          selectedOffers: getSelectedOffersResponse?.data,
        },
      });
    } else {
      yield put({
        type: GET_SELECTED_OFFERS_SUCCESS,
        payload: {
          selectedOffers: [],
        },
      });
    }
  } catch (error) {
    console.log(error);
    yield put({
      type: GET_SELECTED_OFFERS_FAILED,
      payload: {
        error: `Could not get your offers because of (${error.message})`,
      },
    });
  }
}

export { handler };
