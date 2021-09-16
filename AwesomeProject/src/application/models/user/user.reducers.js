import {
  REGISTER_USER_REQUEST_FAILED,
  REGISTER_USER_REQUEST_START,
  REGISTER_USER_REQUEST_SUCCESS,
} from './user.actions';

const initialState = {
  user: null,
  isRegisterLoading: false,
  registrationError: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER_REQUEST_START:
      return Object.assign({}, state, {
        isRegisterLoading: true,
        registrationError: null,
      });
    case REGISTER_USER_REQUEST_SUCCESS:
      let { user } = action.payload;
      return Object.assign({}, state, {
        isRegisterLoading: false,
        user,
      });
    case REGISTER_USER_REQUEST_FAILED:
      let { error } = action.payload;
      return Object.assign({}, state, {
        isRegisterLoading: false,
        registrationError: error,
      });
    default:
      return state;
  }
};

export { reducer };
