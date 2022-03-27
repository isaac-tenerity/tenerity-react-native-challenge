import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import offersReducer from './offersSlice';
import userReducer from './userSlice';
import tagsReducer from './tagsSlice';
import { combineReducers } from 'redux';
//Redux Persist
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const rootReducer = combineReducers({
  offers: offersReducer,
  user: userReducer,
  tags: tagsReducer,
});

// persist config obj
// blacklist a store attribute using it's reducer name. Blacklisted attributes will not persist.
const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
  blacklist: [],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const persistor = persistStore(store);
export default store;
