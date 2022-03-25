import React from 'react';
import store, { persistor } from './redux/store';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import StackNavigation from './navigation/StackNavigation';

const App = () => {
  return (
    <ReduxProvider store={store}>
      <PersistGate persistor={persistor}>
        <StackNavigation />
      </PersistGate>
    </ReduxProvider>
  );
};

export default App;
