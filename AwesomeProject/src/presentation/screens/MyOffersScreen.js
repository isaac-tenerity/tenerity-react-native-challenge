import React from 'react';
import { Text, SafeAreaView, View, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { colors } from '../../application/common/colors';
import { spacing } from '../../application/common/sizes';
import ScreenNames from '../../application/utils/ScreenNames';
import ListEmptyComponent from '../components/ListEmptyComponent';
import ListHeaderComponent from '../components/ListHeaderComponent';
import OfferItem from '../components/OfferItem';

const dummyOffers = [
  {
    id: 1,
    offerType: 'travel',
    title: 'New York City break',
    description:
      'Praesentium similique deserunt iste ute. Neque voluptate aspernatur aut nesciunt adipisci.',
    tagIds: [1, 3],
    image: 'https://picsum.photos/id/274/400/200',
    price: 249.99,
  },
  {
    id: 2,
    offerType: 'tech',
    title: 'New iPhone 18s Pro MAX',
    description:
      'Quisquam quod nobis ea dolores est fugiat. Omnis accusamus velit beatae labore dignissimos. Eligendi expedita facere est facere tempora deleniti. Id et omnis velit alias officiis sunt at.',
    tagIds: [4, 5],
    image: 'https://picsum.photos/id/160/400/200',
    price: 549,
  },
  {
    id: 3,
    offerType: 'music',
    title: 'The Beatles concert',
    description:
      'Distinctio non totam sed et iure molestias dignissimos. Atque molestiae explicabo. Corporis asperiores voluptatibus illum nobis et eos omnis est.',
    tagIds: [1, 3],
    image: 'https://picsum.photos/id/117/400/200',
    price: 99.99,
  },
  {
    id: 4,
    offerType: 'education',
    title: 'Cooking Masterclass',
    description:
      'Voluptas magni omnis. Eum nesciunt sed quis ut repellendus. Ut dolor molestiae aut perspiciatis.',
    tagIds: [2],
    image: 'https://picsum.photos/id/490/400/200',
    price: 350,
    promoted: true,
  },
  {
    id: 5,
    offerType: 'travel',
    title: 'Château De Chambord tour',
    description:
      'Aliquid unde et quo molestiae culpa. Et earum repellendus molestias eveniet quis. Cupiditate ad ut autem reiciendis reprehenderit. Ut earum molestias. Eum iste dicta illo saepe molestias et. Delectus sunt laboriosam vel enim non architecto vero voluptates aut.',
    tagIds: [4],
    image: 'https://picsum.photos/id/142/400/200',
    price: 120,
  },
];
class MyOffersScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <FlatList
          ListHeaderComponent={() => <ListHeaderComponent title="My offers" />}
          ListEmptyComponent={() => (
            <ListEmptyComponent title="No offers yet" />
          )}
          data={dummyOffers}
          renderItem={({ item }) => (
            <OfferItem
              item={item}
              onPress={() =>
                this.props.navigation.navigate(
                  ScreenNames.OFFER_DETAILS_SCREEN,
                  { item: item }
                )
              }
            />
          )}
        />
        <View style={styles.totalContainer}>
          <Text>Total</Text>
          <Text>400$</Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
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
});

export default MyOffersScreen;
