import {
  GET_SELECTED_OFFERS_FAILED,
  GET_SELECTED_OFFERS_START,
  GET_SELECTED_OFFERS_SUCCESS,
  REGISTER_USER_REQUEST_FAILED,
  REGISTER_USER_REQUEST_START,
  REGISTER_USER_REQUEST_SUCCESS,
} from './user.actions';

const initialState = {
  user: null,
  isRegisterLoading: false,
  registrationError: null,

  isSelectedOffersLoading: false,
  selectedOffers: [],
  selectedOffersError: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // register user
    case REGISTER_USER_REQUEST_START:
      return Object.assign({}, state, {
        isRegisterLoading: true,
        registrationError: null,
      });
    case REGISTER_USER_REQUEST_SUCCESS:
      let { user } = action.payload;
      return Object.assign({}, state, {
        isRegisterLoading: false,
        user: user,
      });
    case REGISTER_USER_REQUEST_FAILED:
      let { error } = action.payload;
      return Object.assign({}, state, {
        isRegisterLoading: false,
        registrationError: error,
      });
    // get selected offers
    case GET_SELECTED_OFFERS_START:
      return Object.assign({}, state, {
        isSelectedOffersLoading: true,
        selectedOffersError: null,
      });
    case GET_SELECTED_OFFERS_SUCCESS:
      let { selectedOffers } = action.payload;
      return Object.assign({}, state, {
        isSelectedOffersLoading: false,
        selectedOffers,
      });
    case GET_SELECTED_OFFERS_FAILED:
      let { selectedOffersError } = action.payload;
      return Object.assign({}, state, {
        isSelectedOffersLoading: false,
        selectedOffersError,
        selectedOffers: [],
      });
    default:
      return state;
  }
};

export { reducer };
