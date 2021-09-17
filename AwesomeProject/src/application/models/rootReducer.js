import { combineReducers } from 'redux';
import { reducer as userReducer } from './user/user.reducers';
import { reducer as appReducer } from './app/app.reducers';
import { reducer as offerReducer } from './offer/offer.reducers';
import { reducer as tagReducer } from './tag/tag.reducers';
import { USER_LOGOUT } from './user/user.actions';

const rootReducer = combineReducers({
  user: userReducer,
  offer: offerReducer,
  app: appReducer,
  tag: tagReducer,
});

const reducer = (state, action) => {
  if (action.type === USER_LOGOUT) {
    return rootReducer(undefined, action);
  }
  return rootReducer(state, action);
};

export { reducer };
