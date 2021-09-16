import { colors } from '../../common/colors';

const stackScreenOptions = profileType => {
  return {
    headerTintColor: colors.secondary,
    headerStyle: {
      backgroundColor: colors.primary,
      shadowRadius: 0,
      shadowOffset: {
        height: 0,
      },
      elevation: 0,
    },
  };
};
export { stackScreenOptions };
