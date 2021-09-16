import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../../presentation/screens/WelcomeScreen';
import hiddenStackHeader from './options/hiddenStackHeader';
import ScreenNames from '../utils/ScreenNames';
import BottomTabNavigator from './navigators/BottomTabNavigator';
import OfferDetailsScreen from '../../presentation/screens/OfferDetailsScreen';
import { stackScreenOptions } from './options/stackScreenOptions';
import ReduxContainer from '../../presentation/containers/ReduxContainer';
import {
  HeaderRight,
  HeaderTitle,
} from '../../infrastructure/globalComponents/AppHeader';

const MainStack = createStackNavigator();

const Router = ({ isUserAuthenticated, toggleIsUserAuthenticated }) => {
  return (
    <NavigationContainer>
      <MainStack.Navigator screenOptions={stackScreenOptions}>
        {!isUserAuthenticated ? (
          <MainStack.Screen
            name={ScreenNames.WELCOME_SCREEN}
            component={WelcomeScreen}
            options={hiddenStackHeader}
          />
        ) : (
          <>
            <MainStack.Screen
              name={ScreenNames.BOTTOM_TAB_BAR}
              component={BottomTabNavigator}
              options={({ navigation }) => ({
                headerTitle: () => <HeaderTitle />,
                headerLeft: null,
                headerRight: () => (
                  <HeaderRight
                    toggleIsUserAuthenticated={toggleIsUserAuthenticated}
                  />
                ),
              })}
            />
            <MainStack.Screen
              name={ScreenNames.OFFER_DETAILS_SCREEN}
              component={OfferDetailsScreen}
              options={{
                title: 'Details',
              }}
            />
          </>
        )}
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default ReduxContainer(Router);
