import Colors from '@/constants/Colors';
import * as React from 'react';
import { Card, Chip } from 'react-native-paper';

import { Animated, Dimensions, View, StyleSheet } from 'react-native';
import Tags from '@/components/Tags';

const { width, height } = Dimensions.get('screen');
const imageW = width * 0.88;
const imageH = imageW * 0.7;

export const OfferItem = ({
  image,
  title,
  description,
  scrollXP,
  index,
  tagIds,
  allTags,
}) => {
  const inputRange = [(index - 1) * width, index * width, (index + 1) * width];
  const opacityInputRange = [
    (index - 0.4) * width,
    index * width,
    (index + 0.4) * width,
  ];

  const translateXDescription = scrollXP.interpolate({
    inputRange,
    outputRange: [width, 0, -width],
  });
  const opacity = scrollXP.interpolate({
    inputRange: opacityInputRange,
    outputRange: [0, 1, 0],
  });

  return (
    <View style={[styles.itemStyle, styles.offerImageShadow]}>
      <Animated.Image source={{ uri: image }} style={styles.offerImage} />
      <View style={styles.textContainer}>
        <Animated.Text
          style={[
            styles.heading,
            {
              opacity,
            },
          ]}
        >
          {title}
        </Animated.Text>
        <Animated.Text
          style={[
            styles.description,
            {
              opacity,
              transform: [{ translateX: translateXDescription }],
            },
          ]}
        >
          {description}
        </Animated.Text>
        <Tags tagIds={tagIds} allTags={allTags} opacity={opacity} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemStyle: {
    width,
    height,
    marginTop: 20,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  imageStyle: {
    width: width * 0.75,
    height: width * 0.75,
    resizeMode: 'contain',
    flex: 1,
  },
  textContainer: {
    alignItems: 'flex-start',
    alignSelf: 'center',
  },
  heading: {
    marginTop: 30,
    color: 'white',
    textTransform: 'uppercase',
    fontSize: 18,
    fontWeight: '800',
    letterSpacing: 2,
    marginBottom: 7,
    paddingHorizontal: 14,
  },
  description: {
    color: Colors.white,
    fontWeight: '600',
    textAlign: 'justify',
    textShadowColor: Colors.textShadow,
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    width: width * 0.85,
    marginRight: 10,
    fontSize: 15.5,
    lineHeight: 16 * 1.4,
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  offerImage: {
    width: imageW,
    height: imageH,
    alignSelf: 'center',
    resizeMode: 'cover',
    borderRadius: 16,
  },
  offerImageShadow: {
    shadowColor: Colors.black,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 20,
  },
});
