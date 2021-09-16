import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import { screen, text } from '../../application/common/sizes';
import { colors } from '../../application/common/colors';
import TagItem from './TagItem';
import Button from '../../infrastructure/globalComponents/Button';
import { attachTagsToOffer } from '../../application/filters/offers.filter';

const SliderItem = ({ item, tags }) => {
  // this should be done by joining the two tables (offers and tags) instead of doing this
  let offer = attachTagsToOffer(item, tags);
  console.log({ tags });
  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        imageStyle={styles.image}
        source={{ uri: offer.image }}
        style={styles.imageBackground}
      >
        <View>
          {offer?.promoted && (
            <View style={styles.promotedTagContainer}>
              <TagItem title="promoted" />
            </View>
          )}
          <Text style={styles.titleText}>{offer.title}</Text>
          <Text style={styles.descriptionText}>{offer.description}</Text>
          <Text style={styles.priceText}>{offer.price}$</Text>
          <View style={styles.tagContainer}>
            {tags.length > 0 &&
              offer?.offerTags.map(tag => (
                <TagItem key={tag?.id} title={tag?.text} />
              ))}
          </View>
        </View>
        <Button title="add to my offers" />
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  promotedTagContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  container: {
    height: screen.HEIGHT - 220,
    width: screen.WIDTH - 40,
  },
  image: {
    borderRadius: 10,
  },
  tagContainer: {
    flexDirection: 'row',
    width: screen.WIDTH - 40,
  },
  imageBackground: {
    height: null,
    width: null,
    flex: 1,
    padding: 10,
    justifyContent: 'space-between',
  },
  titleText: {
    textShadowColor: colors.black,
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    color: colors.white,
    fontSize: text.TITLE,
  },
  priceText: {
    textShadowColor: colors.black,
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    color: colors.white,
    fontSize: text.NORMAL,
    textAlign: 'right',
  },
  descriptionText: {
    textShadowColor: colors.black,
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    color: colors.white,
    fontSize: text.DESCRIPTION,
  },
});
export default SliderItem;
