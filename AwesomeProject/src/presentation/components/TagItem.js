import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../../application/common/colors';
import { spacing, text } from '../../application/common/sizes';

const TagItem = ({ title }) => {
  return (
    <View style={styles.tagContainer}>
      <Text style={styles.tagTitle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  tagContainer: {
    backgroundColor: colors.secondary,
    padding: spacing.SMALL,
    margin: spacing.SMALL,
    borderRadius: 10,
  },
  tagTitle: {
    color: colors.primary,
    fontSize: text.SMALL,
  },
});

export default TagItem;
