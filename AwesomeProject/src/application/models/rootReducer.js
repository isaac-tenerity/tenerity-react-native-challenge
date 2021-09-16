import { combineReducers } from 'redux';
import { reducer as userReducer } from './user/user.reducers';
import { reducer as appReducer } from './app/app.reducers';
import { reducer as offerReducer } from './offer/offer.reducers';

const rootReducer = combineReducers({
  user: userReducer,
  offer: offerReducer,
  app: appReducer,
});

const reducer = (state, action) => {
  if (action.type === 'USER_LOGOUT') {
    return rootReducer(undefined, action);
  }
  return rootReducer(state, action);
};

export { reducer };
