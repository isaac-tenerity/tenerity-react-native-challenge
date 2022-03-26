import Colors from '@/constants/Colors';
import { getOfferTags } from '@/helpers/Tags';
import useGetTags from '@/hooks/useApiTags';
import * as React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import { Chip } from 'react-native-paper';
const Tags = ({ tagIds, allTags, opacity }) => {
  let offerTags = [];
  if (allTags && tagIds) {
    offerTags = getOfferTags(tagIds, allTags);
  }
  return (
    <SafeAreaView style={styles.container}>
      {offerTags &&
        offerTags.map(tag => (
          <Chip
            icon="tag"
            style={[styles.chip, { opacity }]}
            mode="outlined"
            selectedColor={Colors.tomato}
            selected
          >
            {tag.text}
          </Chip>
        ))}
    </SafeAreaView>
  );
};
export default Tags;
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    marginLeft: 10,
  },
  chip: {
    marginTop: 5,
    alignSelf: 'center',
    marginRight: 8,
  },
});
