import React from 'react';
import store, { persistor } from './redux/store';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider as PaperProvider } from 'react-native-paper';
import { QueryClient, QueryClientProvider } from 'react-query';
import TabNavigation from '@/navigation/TabNavigation';
const queryClient = new QueryClient();

const App = () => {
  return (
    <ReduxProvider store={store}>
      <PersistGate persistor={persistor}>
        <PaperProvider>
          <QueryClientProvider client={queryClient}>
            <TabNavigation />
          </QueryClientProvider>
        </PaperProvider>
      </PersistGate>
    </ReduxProvider>
  );
};

export default App;
