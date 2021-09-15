import { Dimensions } from 'react-native';
const screen = {
  WIDTH: Dimensions.get('window').width,
  HEIGHT: Dimensions.get('window').height,
};

const text = {
  TITLE: 0.07 * screen.WIDTH,
  NORMAL: 0.05 * screen.WIDTH,
  DESCRIPTION: 0.04 * screen.WIDTH,
};

const spacing = {
  VERY_SMALL: 2,
  SMALL: 4,
  NORMAL: 8,
  LARGE: 16,
  VERY_LARGE: 24,
  HUGE: 32,
  VERY_HUGE: 40,
};

export { screen, text, spacing };
