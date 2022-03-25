import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '@/containers/HomeScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import MyOffersScreen from '@/containers/MyOffersScreen';
import Colors from '@/constants/Colors';
import { StyleSheet, View } from 'react-native';
const Tab = createBottomTabNavigator();

/**
 * Tab navigation for showing the selected screen.
 * @returns Tab Navigation selected screen.
 */
export default function TabNavigation() {
  /**
   * Renders the Icon for a screen.
   * @param focused If the icon is selected.
   * @param route The route name of the icon.
   * @returns The tab icon.
   */
  const renderTabIcon = (focused, route) => {
    let iconName;
    if (route.name === 'Home') {
      iconName = focused ? 'home' : 'home-outline';
    } else if (route.name === 'MyOffers') {
      iconName = focused ? 'pricetag' : 'pricetag-outline';
    }
    return (
      <View style={styles.iconMargin}>
        <Icon name={iconName} size={27} color="#900" />
      </View>
    );
  };
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused }) => renderTabIcon(focused, route),
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

const styles = StyleSheet.create({
  iconMargin: { marginTop: 7 },
});
