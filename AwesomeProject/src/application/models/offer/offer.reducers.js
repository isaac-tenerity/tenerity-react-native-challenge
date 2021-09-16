import {
  GET_OFFER_REQUEST_FAILED,
  GET_OFFER_REQUEST_START,
  GET_OFFER_REQUEST_SUCCESS,
} from './offer.actions';

const initialState = {
  offers: [],
  isGetOffersLoading: false,
  getOffersError: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_OFFER_REQUEST_START:
      return Object.assign({}, state, {
        isGetOffersLoading: true,
        getOffersError: null,
      });
    case GET_OFFER_REQUEST_SUCCESS:
      const { offers } = action.payload;
      return Object.assign({}, state, {
        offers,
        isGetOffersLoading: false,
      });
    case GET_OFFER_REQUEST_FAILED:
      const { error } = action.payload;
      return Object.assign({}, state, {
        isGetOffersLoading: false,
        getOffersError: error,
      });
    default:
      return state;
  }
};

export { reducer };
