import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../../application/common/colors';
import { spacing } from '../../application/common/sizes';

const Error = ({ errorMessage }) => {
  return (
    <View style={styles.errorContainer}>
      <Text style={styles.errorMessage}>{errorMessage}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  errorContainer: {
    padding: spacing.LARGE,
  },
  errorMessage: {
    color: colors.danger,
    textAlign: 'center',
  },
});

export default Error;
