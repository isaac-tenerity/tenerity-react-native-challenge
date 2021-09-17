import React from 'react';
import {
  Text,
  SafeAreaView,
  View,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { colors } from '../../application/common/colors';
import { spacing } from '../../application/common/sizes';
import ScreenNames from '../../application/utils/ScreenNames';
import ListEmptyComponent from '../components/ListEmptyComponent';
import ListHeaderComponent from '../components/ListHeaderComponent';
import OfferItem from '../components/OfferItem';
import ReduxContainer from '../containers/ReduxContainer';
import { attachTagsToOffer } from '../../application/filters/offers.filter';
import Error from '../../infrastructure/globalComponents/Error';
class MyOffersScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getOffersTotal = () => {
    let { selectedOffers } = this.props;
    let total = 0;
    selectedOffers.map(offer => (total = total + offer?.price));
    return total;
  };

  componentDidMount = () => {
    let {
      user: { id },
    } = this.props;
    this.props.getSelectedOffers(id);
    this.props.navigation.addListener('tabPress', () => {
      let {
        user: { id },
      } = this.props;
      this.props.getSelectedOffers(id);
    });
  };

  componentWillUnmount = () => {
    this.props.navigation.removeListener('tabPress');
  };

  render() {
    let { selectedOffers, tags, isSelectedOffersLoading, selectedOffersError } =
      this.props;
    return isSelectedOffersLoading ? (
      <View style={styles.activityIndicatorContainer}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    ) : (
      <SafeAreaView style={styles.safeAreaView}>
        {selectedOffersError === null ? (
          <FlatList
            ListHeaderComponent={() => (
              <ListHeaderComponent title="My offers" />
            )}
            ListEmptyComponent={() => (
              <ListEmptyComponent title="No offers yet" />
            )}
            data={selectedOffers}
            renderItem={({ item }) => {
              let offer = attachTagsToOffer(item, tags);
              return (
                <OfferItem
                  item={offer}
                  onPress={() =>
                    this.props.navigation.navigate(
                      ScreenNames.OFFER_DETAILS_SCREEN,
                      { item: offer }
                    )
                  }
                />
              );
            }}
          />
        ) : (
          <View style={styles.errorContainer}>
            <Error errorMessage={selectedOffersError} />
          </View>
        )}
        <View style={styles.totalContainer}>
          <Text>Total</Text>
          <Text>{this.getOffersTotal(selectedOffers)}$</Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  totalContainer: {
    backgroundColor: colors.secondary,
    bottom: 0,
    left: 0,
    right: 0,
    height: 40,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: spacing.SMALL,
  },
  activityIndicatorContainer: {
    padding: spacing.LARGE,
  },
  errorContainer: {
    flex: 1,
  },
});

export default ReduxContainer(MyOffersScreen);
