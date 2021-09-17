import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { reducer } from './src/application/models/rootReducer';
import { handler as userSaga } from './src/application/models/user/user.sagas';
import { handler as appSaga } from './src/application/models/app/app.sagas';
import { handler as offerSaga } from './src/application/models/offer/offer.sagas';
import { handler as tagSaga } from './src/application/models/tag/tag.sagas';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['user.isLoading', 'offer', 'tag'],
};

const persistedReducer = persistReducer(persistConfig, reducer);

const sagaMiddleware = createSagaMiddleware();

const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
let persistor = persistStore(store);

sagaMiddleware.run(userSaga);
sagaMiddleware.run(appSaga);
sagaMiddleware.run(offerSaga);
sagaMiddleware.run(tagSaga);

// to have an access to the store in the app if needed
export { store, persistor };
