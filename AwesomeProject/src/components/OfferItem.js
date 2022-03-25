import * as React from 'react';
import { Animated, Dimensions, View, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('screen');
const imageW = width * 0.88;
const imageH = imageW * 0.7;

export const OfferItem = ({ image, title, description, scrollXP, index }) => {
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
    <View style={styles.itemStyle}>
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
    fontSize: 19,
    fontWeight: '800',
    letterSpacing: 2,
    marginBottom: 10,
  },
  description: {
    color: '#ccc',
    fontWeight: '600',
    textAlign: 'left',
    width: width * 0.75,
    marginRight: 10,
    fontSize: 16,
    lineHeight: 16 * 1.5,
  },
  offerImage: {
    width: imageW,
    height: imageH,
    alignSelf: 'center',
    resizeMode: 'cover',
    borderRadius: 16,
  },
});
