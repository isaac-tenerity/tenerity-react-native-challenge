import { colors } from '../../common/colors';

const stackScreenOptions = profileType => {
  return {
    headerTintColor: colors.primary,
    headerStyle: {
      backgroundColor: colors.secondary,
      shadowRadius: 0,
      shadowOffset: {
        height: 0,
      },
      elevation: 0,
    },
  };
};
export { stackScreenOptions };
