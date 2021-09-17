import React from 'react';
import Carousel from 'react-native-snap-carousel';
import { StyleSheet } from 'react-native';

const ViewPagerComponent = props => {
  return (
    <Carousel
      layout={'default'}
      data={props.offers}
      renderItem={props.renderItem}
      sliderWidth={props.sliderWidth}
      itemWidth={props.itemWidth}
      hasParallaxImages={true}
      inactiveSlideScale={0.94}
      inactiveSlideOpacity={0.7}
      containerCustomStyle={styles.containerCustomStyle}
      contentContainerCustomStyle={styles.contentContainerCustomStyle}
      loop={true}
      loopClonesPerSide={2}
      autoplay={true}
      autoplayDelay={500}
      autoplayInterval={3000}
    />
  );
};

const styles = StyleSheet.create({
  containerCustomStyle: {
    overflow: 'visible',
  },
  contentContainerCustomStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default ViewPagerComponent;
