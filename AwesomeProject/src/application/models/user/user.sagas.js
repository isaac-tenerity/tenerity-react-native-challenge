import { Alert } from 'react-native';
import { takeEvery, call, put, all } from 'redux-saga/effects';
import {
  getUserInfoRequest,
  registerUserRequest,
  getUserSelectedOffersRequest,
  addOfferRequest,
} from '../../../infrastructure/api/user.api';
import { TOGGLE_IS_USER_AUTHENTICATED } from '../app/app.actions';
import {
  ADD_USER_OFFER_REQUEST,
  ADD_USER_OFFER_REQUEST_FAILED,
  ADD_USER_OFFER_REQUEST_START,
  ADD_USER_OFFER_REQUEST_SUCCESS,
  GET_SELECTED_OFFERS,
  GET_SELECTED_OFFERS_FAILED,
  GET_SELECTED_OFFERS_START,
  GET_SELECTED_OFFERS_SUCCESS,
  REGISTER_USER_REQUEST,
  REGISTER_USER_REQUEST_FAILED,
  REGISTER_USER_REQUEST_START,
  REGISTER_USER_REQUEST_SUCCESS,
  REMOVE_USER_OFFER_REQUEST,
  REMOVE_USER_OFFER_REQUEST_FAILED,
  REMOVE_USER_OFFER_REQUEST_START,
  REMOVE_USER_OFFER_REQUEST_SUCCESS,
} from './user.actions';
import * as navigationHelper from '../../helpers/navigationHelper';
import ScreenNames from '../../utils/ScreenNames';

function* handler() {
  yield takeEvery(REGISTER_USER_REQUEST, registerUser);
  yield takeEvery(GET_SELECTED_OFFERS, getSelectedOffers);
  yield takeEvery(ADD_USER_OFFER_REQUEST, addUserOffer);
  yield takeEvery(REMOVE_USER_OFFER_REQUEST, removeUserOffer);
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
        selectedOffersError: `Could not get your offers because of (${error.message})`,
      },
    });
  }
}

function* addUserOffer(action) {
  try {
    yield put({ type: ADD_USER_OFFER_REQUEST_START });
    console.log(action.payload.user);
    let {
      user: { id, name },
      offerId,
    } = action.payload;
    // get user info
    let getUserInfoResponse = yield call(getUserInfoRequest, id);
    // get user selected offers
    let { selectedOffers } = getUserInfoResponse?.data;
    // check if offer already exists
    let offerExists = selectedOffers.findIndex(id => id === offerId);
    if (offerExists !== -1) {
      Alert.alert(
        'Offer already added',
        'This offer already exists in your offer list',
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {
            text: 'Go to offers',
            onPress: () =>
              navigationHelper.navigate(ScreenNames.MY_OFFERS_SCREEN),
          },
        ]
      );
      return;
    }

    // add offer id to the selected offers
    let newSelectedOffers = [...selectedOffers, offerId];
    // add the offer to the selected offers
    yield call(addOfferRequest, id, {
      id,
      name,
      selectedOffers: newSelectedOffers,
    });
    // get the full details of the offer newSelectedOffers
    if (newSelectedOffers.length > 0) {
      // i would do this on the backend side with joining the user table with the offers
      let getSelectedOffersResponse = yield call(
        getUserSelectedOffersRequest,
        newSelectedOffers
      );
      Alert.alert('Successfully added', 'The offer was added successfully', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'Go to offers',
          onPress: () =>
            navigationHelper.navigate(ScreenNames.MY_OFFERS_SCREEN),
        },
      ]);
      yield put({
        type: ADD_USER_OFFER_REQUEST_SUCCESS,
        payload: {
          newSelectedOffers: getSelectedOffersResponse?.data,
        },
      });
    } else {
      yield put({
        type: ADD_USER_OFFER_REQUEST_SUCCESS,
        payload: {
          newSelectedOffers: [],
        },
      });
    }
  } catch (error) {
    console.log(error);
    alert(
      `Could not add this offer to the your offers because of (${error.message})`
    );
  }
}

function* removeUserOffer(action) {
  try {
    yield put({ type: REMOVE_USER_OFFER_REQUEST_START });
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
        type: REMOVE_USER_OFFER_REQUEST_SUCCESS,
        payload: {
          selectedOffers: getSelectedOffersResponse?.data,
        },
      });
    } else {
      yield put({
        type: ADD_USER_OFFER_REQUEST_FAILED,
        payload: {
          selectedOffers: [],
        },
      });
    }
  } catch (error) {
    console.log(error);
    yield put({
      type: REMOVE_USER_OFFER_REQUEST_FAILED,
      payload: {
        selectedOffersError: `Could not get your offers because of (${error.message})`,
      },
    });
  }
}

export { handler };
