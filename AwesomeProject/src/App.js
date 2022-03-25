import React from 'react';
import store, { persistor } from './redux/store';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import StackNavigation from './navigation/StackNavigation';

import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient();

const App = () => {
  return (
    <ReduxProvider store={store}>
      <PersistGate persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <StackNavigation />
        </QueryClientProvider>
      </PersistGate>
    </ReduxProvider>
  );
};

export default App;
