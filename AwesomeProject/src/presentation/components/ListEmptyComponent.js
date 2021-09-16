import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { spacing } from '../../application/common/sizes';

const ListEmptyComponent = ({ title }) => {
  return <Text style={styles.text}>{title}</Text>;
};

const styles = StyleSheet.create({
  text: {
    padding: spacing.NORMAL,
    textAlign: 'center',
  },
});

export default ListEmptyComponent;
