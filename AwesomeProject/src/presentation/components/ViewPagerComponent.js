import React from 'react';
import Carousel from 'react-native-snap-carousel';

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
      containerCustomStyle={{
        overflow: 'visible',
      }}
      loop={true}
      loopClonesPerSide={2}
      autoplay={false}
      autoplayDelay={500}
      autoplayInterval={3000}
      onSnapToItem={props.slider1ActiveSlide}
    />
  );
};

export default ViewPagerComponent;
