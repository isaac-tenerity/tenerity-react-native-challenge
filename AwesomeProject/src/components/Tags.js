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
            onPress={() => console.log('apple')}
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
    alignSelf: 'center',
  },
  chip: {
    marginTop: 15,
    alignSelf: 'center',
    marginRight: 8,
  },
});
