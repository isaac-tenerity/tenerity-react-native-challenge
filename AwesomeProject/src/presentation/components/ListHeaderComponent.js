import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { spacing } from '../../application/common/sizes';

const ListHeaderComponent = ({ title }) => {
  return <Text style={styles.text}>{title}</Text>;
};

const styles = StyleSheet.create({
  text: {
    padding: spacing.NORMAL,
    fontWeight: 'bold',
  },
});

export default ListHeaderComponent;
