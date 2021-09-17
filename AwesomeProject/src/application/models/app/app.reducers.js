import { TOGGLE_IS_USER_AUTHENTICATED_SUCCESS } from './app.actions';

const initialState = {
  isUserAuthenticated: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_IS_USER_AUTHENTICATED_SUCCESS:
      let { isUserAuthenticated } = action.payload;
      return Object.assign({}, state, {
        isUserAuthenticated,
      });
    default:
      return state;
  }
};

export { reducer };
