import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import { screen, text } from '../../application/common/sizes';
import { colors } from '../../application/common/colors';
import TagItem from './TagItem';
import Button from '../../infrastructure/globalComponents/Button';
const SliderItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        imageStyle={styles.image}
        source={{ uri: item.image }}
        style={styles.imageBackground}
      >
        <View>
          <Text style={styles.titleText}>{item.title}</Text>
          <Text style={styles.descriptionText}>{item.description}</Text>
          <Text style={styles.priceText}>{item.price}$</Text>
          <View style={styles.tagContainer}>
            <TagItem tagTitle="expired soon" />
          </View>
        </View>

        <Button title="add to my offers" />
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: screen.HEIGHT - 150,
    width: screen.WIDTH - 40,
  },
  image: {
    borderRadius: 10,
  },
  tagContainer: {
    flexDirection: 'row',
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
