import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../../presentation/screens/WelcomeScreen';
import hiddenStackHeader from './options/hiddenStackHeader';
import ScreenNames from '../utils/ScreenNames';

const MainStack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator>
        <MainStack.Screen
          name={ScreenNames.WELCOME_SCREEN}
          component={WelcomeScreen}
          options={hiddenStackHeader}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
