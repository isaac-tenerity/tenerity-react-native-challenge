import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import ViewPagerComponent from '../components/ViewPagerComponent';
import { screen, spacing, text } from '../../application/common/sizes';
import { colors } from '../../application/common/colors';
import SliderItem from '../components/SliderItem';
import ReduxContainer from '../containers/ReduxContainer';
import Error from '../../infrastructure/globalComponents/Error';
import Button from '../../infrastructure/globalComponents/Button';
class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    this.props.getOffers();
    this.props.getTags();
    // to make sure the user has the latest offers
    this.props.navigation.addListener('tabPress', () => {
      this.props.getOffers();
      this.props.getTags();
    });
  };

  componentWillUnmount = () => {
    this.props.navigation.removeListener('tabPress');
  };

  render() {
    let { offers, isGetOffersLoading, getOffersError, tags } = this.props;
    console.log({ tags });
    return isGetOffersLoading ? (
      <View style={styles.activityIndicatorContainer}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    ) : getOffersError ? (
      <View>
        <Error errorMessage={getOffersError} />
        <Button title="Try again" onPress={this.props.getOffers} />
      </View>
    ) : (
      <ViewPagerComponent
        renderItem={({ item }) => <SliderItem item={item} tags={tags} />}
        offers={offers}
        sliderWidth={screen.WIDTH}
        itemWidth={screen.WIDTH - 40}
      />
    );
  }
}

const styles = StyleSheet.create({
  activityIndicatorContainer: {
    padding: spacing.LARGE,
  },
});

export default ReduxContainer(HomeScreen);
