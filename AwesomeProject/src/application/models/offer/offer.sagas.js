import { call, put, takeEvery } from 'redux-saga/effects';
import { getOffersRequest } from '../../../infrastructure/api/offers.api';
import { sortPromotedFirst } from '../../filters/offers.filter';
import {
  GET_OFFER_REQUEST,
  GET_OFFER_REQUEST_START,
  GET_OFFER_REQUEST_SUCCESS,
  GET_OFFER_REQUEST_FAILED,
} from './offer.actions';

function* handler() {
  yield takeEvery(GET_OFFER_REQUEST, getOffers);
}

function* getOffers() {
  try {
    yield put({
      type: GET_OFFER_REQUEST_START,
    });
    let getOffersResponse = yield call(getOffersRequest);

    yield put({
      type: GET_OFFER_REQUEST_SUCCESS,
      payload: {
        offers: sortPromotedFirst(getOffersResponse?.data),
      },
    });
  } catch (error) {
    yield put({
      type: GET_OFFER_REQUEST_FAILED,
      payload: {
        error: `Could not load the offers because of (${error.message})`,
      },
    });
  }
}

export { handler };
