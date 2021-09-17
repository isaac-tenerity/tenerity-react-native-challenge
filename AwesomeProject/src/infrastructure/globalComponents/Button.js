import React from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { colors } from '../../application/common/colors';
import { spacing, text } from '../../application/common/sizes';

const Button = ({ title, onPress, isButtonLoading, isDisabled }) => {
  return (
    <TouchableOpacity
      disabled={isButtonLoading || isDisabled}
      onPress={onPress}
      style={styles.button(isDisabled)}
    >
      {isButtonLoading ? (
        <ActivityIndicator size="small" color={colors.secondary} />
      ) : (
        <Text style={styles.buttonTitle}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: isDisabled => {
    return {
      backgroundColor: isDisabled ? colors.gray : colors.primary,
      borderRadius: 10,
      margin: spacing.LARGE,
      height: 40,
      paddingHorizontal: spacing.NORMAL,
      justifyContent: 'center',
      alignItems: 'center',
    };
  },
  buttonTitle: {
    fontSize: text.NORMAL,
    textTransform: 'uppercase',
    color: colors.secondary,
  },
});
export default Button;
