import ScreenNames from '../../utils/ScreenNames';
import Icon from '../../../infrastructure/globalComponents/Icon';
import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { text } from '../../common/sizes';

const icon = route => {
  return ({ focused, color }) => {
    let iconName;
    let iconFont;
    switch (route.name) {
      case ScreenNames.HOME_SCREEN:
        iconName = focused ? 'home' : 'home-outline';
        iconFont = 'ionicon';
        break;
      case ScreenNames.MY_OFFERS_SCREEN:
        iconName = focused ? 'search' : 'search-outline';
        iconFont = 'ionicon';
        break;
    }
    return (
      <Icon type={iconFont} name={iconName} size={text.NORMAL} color={color} />
    );
  };
};

const label = route => {
  return ({ focused, color }) => {
    let label;
    switch (route.name) {
      case ScreenNames.HOME_SCREEN:
        label = 'Home';
        break;
      case ScreenNames.MY_OFFERS_SCREEN:
        label = 'My Offers';
        break;
    }
    return <Text style={styles.labelText({ color })}>{label}</Text>;
  };
};

const bottomTabBarScreenOptions = ({ route }) => ({
  tabBarIcon: icon(route),
  tabBarLabel: label(route),
});

const styles = StyleSheet.create({
  labelText: ({ color }) => {
    return {
      fontSize: text.SMALL,
      color,
    };
  },
});

export { bottomTabBarScreenOptions };
