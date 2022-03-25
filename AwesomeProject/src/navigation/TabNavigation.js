import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '@/containers/HomeScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import MyOffersScreen from '@/containers/MyOffersScreen';
import Colors from '@/constants/Colors';
import { View } from 'react-native';
const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'MyOffers') {
              iconName = focused ? 'pricetag' : 'pricetag-outline';
            }
            return (
              <View style={{ marginTop: 7 }}>
                <Icon name={iconName} size={27} color="#900" />
              </View>
            );
          },
          tabBarActiveTintColor: Colors.tomato,
          tabBarInactiveTintColor: Colors.gray,
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="MyOffers" component={MyOffersScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
