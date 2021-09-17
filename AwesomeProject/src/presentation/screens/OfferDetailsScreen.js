import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  FlatList,
  StyleSheet,
} from 'react-native';
import { screen, spacing, text } from '../../application/common/sizes';
import TagItem from '../components/TagItem';
import Button from '../../infrastructure/globalComponents/Button';
import ReduxContainer from '../containers/ReduxContainer';
class OfferDetailsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let { item } = this.props.route.params;
    let { addUserOffer, user } = this.props;
    return (
      <View style={styles.mainContainer}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.contentContainerStyle}
        >
          <View>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={item?.offerTags}
              renderItem={tag => {
                return <TagItem title={tag?.item?.text} key={tag?.item?.id} />;
              }}
            />

            <View style={styles.titlePriceContainer}>
              <Text style={styles.titleText}>{item.title}</Text>
              <Text style={styles.priceText}>{item.price}$</Text>
            </View>
            <Text style={styles.descriptionText}>{item.description}</Text>
          </View>
          <Button
            title="add to my offers"
            onPress={() => addUserOffer(user, item?.id)}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  image: {
    width: screen.WIDTH,
    height: screen.WIDTH / 2,
  },
  scrollView: {
    padding: spacing.NORMAL,
    flex: 1,
  },
  contentContainerStyle: {
    flex: 1,
    justifyContent: 'space-between',
  },
  titlePriceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: spacing.LARGE,
  },
  titleText: {
    fontSize: text.TITLE,
  },
  priceText: {
    fontSize: text.NORMAL,
  },
  descriptionText: {
    fontSize: text.DESCRIPTION,
    paddingTop: spacing.LARGE,
  },
});
export default ReduxContainer(OfferDetailsScreen);
