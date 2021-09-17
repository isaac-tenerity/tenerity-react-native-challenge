import React from 'react';
import { Image, Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import Logo from '../../application/assets/logo.png';
import { spacing, text } from '../../application/common/sizes';

const HeaderTitle = () => {
  return (
    <View style={styles.headerTitleContainer}>
      <Image source={Logo} style={styles.image} resizeMode="contain" />
    </View>
  );
};

const HeaderRight = ({ toggleIsUserAuthenticated }) => {
  return (
    <TouchableOpacity
      style={styles.logoutButtonContainer}
      onPress={() => toggleIsUserAuthenticated(false)}
    >
      <Text style={styles.logoutText}>logout</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  headerTitleContainer: {
    flex: 1,
  },
  image: {
    height: 60,
    width: 60,
    flex: 1,
  },
  logoutButtonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.SMALL,
  },
  logoutText: {
    fontSize: text.SMALL,
    textTransform: 'uppercase',
  },
});

export { HeaderRight, HeaderTitle };
