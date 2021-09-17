import React from 'react';
import HomeScreen from '../../../presentation/screens/HomeScreen';
import MyOffersScreen from '../../../presentation/screens/MyOffersScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ScreenNames from '../../utils/ScreenNames';
import { bottomTabBarScreenOptions } from '../options/tabBarScreenOptions';
import { tabBarOptions } from '../options/tabBarOptions';

const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      screenOptions={bottomTabBarScreenOptions}
      tabBarOptions={tabBarOptions}
    >
      <BottomTab.Screen name={ScreenNames.HOME_SCREEN} component={HomeScreen} />
      <BottomTab.Screen
        name={ScreenNames.MY_OFFERS_SCREEN}
        component={MyOffersScreen}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
