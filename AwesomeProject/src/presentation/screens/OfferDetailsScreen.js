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

class OfferDetailsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let { item } = this.props.route.params;
    return (
      <View style={styles.mainContainer}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <ScrollView style={styles.scrollView}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={['first', 'second']}
            renderItem={({ title }) => <TagItem title="title" />}
          />
          <View style={styles.titlePriceContainer}>
            <Text style={styles.titleText}>{item.title}</Text>
            <Text style={styles.priceText}>{item.price}$</Text>
          </View>
          <Text style={styles.descriptionText}>{item.description}</Text>
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
export default OfferDetailsScreen;
