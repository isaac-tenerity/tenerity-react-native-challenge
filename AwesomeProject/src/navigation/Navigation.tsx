import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator, BottomTabBarProps, BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import {Offers, SelectedOffersComp} from '../screens';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

type NavigationProps = {
  Offers:BottomTabBarProps,
  SelectedOffers: BottomTabBarProps
}

const Tab = createBottomTabNavigator<NavigationProps>();

const screenOptions  = (title:string, labelShown:boolean, imgName:string): BottomTabNavigationOptions  => ({
  headerTitle: title,
  tabBarShowLabel:labelShown,
  tabBarIcon: ({ focused }) => (
    <MaterialCommunityIcons name={imgName} color={(focused)? "#e55b5b": "#c9c9c9" } size={(focused)?25:20} />
  ),
})

const Navigation = () => {
  return (
    <NavigationContainer>
       <Tab.Navigator>
        <Tab.Screen 
          name="Offers" 
          component={Offers} 
          options={screenOptions("Offers", false, "sale")}
        />
        <Tab.Screen 
          name="SelectedOffers" 
          component={SelectedOffersComp} 
          options={screenOptions("Selected Offers", false, "cart-heart")}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
};

export default Navigation;