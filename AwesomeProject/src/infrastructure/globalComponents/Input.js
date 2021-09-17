import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { colors } from '../../application/common/colors';
import { screen, spacing } from '../../application/common/sizes';

const Input = props => {
  return (
    <View style={styles.inputContainer}>
      <TextInput {...props} style={styles.input} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: screen.WIDTH,
    justifyContent: 'center',
  },
  input: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.primary,
    marginHorizontal: spacing.LARGE,
    flex: 1,
    height: 40,
    paddingHorizontal: spacing.NORMAL,
    color: colors.black,
  },
});

export default Input;
