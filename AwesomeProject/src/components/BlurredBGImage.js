import { Animated, Dimensions, StyleSheet, Text, View } from 'react-native';
import React from 'react';
const { width } = Dimensions.get('screen');

const BlurredBGImage = ({ offers, scrollX }) => {
  return (
    <View style={[StyleSheet.absoluteFillObject]}>
      {offers &&
        offers.map((offer, index) => {
          const image = offer.image;
          const inputRange = [
            (index - 1) * width,
            index * width,
            (index + 1) * width,
          ];
          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0, 1, 0],
          });
          return (
            <Animated.Image
              key={`image-${index}`}
              source={{ uri: image }}
              style={[StyleSheet.absoluteFillObject, { opacity }]}
              blurRadius={14}
            />
          );
        })}
    </View>
  );
};

export default BlurredBGImage;
