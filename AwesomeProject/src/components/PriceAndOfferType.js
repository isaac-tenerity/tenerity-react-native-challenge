import Colors from '@/constants/Colors';
import * as React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { Chip } from 'react-native-paper';
const PriceAndOfferType = ({ price, offerType, opacity }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Chip
        icon="cart"
        style={[styles.chip, { opacity }]}
        mode="outlined"
        selectedColor={Colors.tomato}
        selected
      >
        {'£' + price}
      </Chip>
      <Chip
        icon="folder"
        style={[styles.chip, { opacity }]}
        mode="outlined"
        selectedColor={Colors.tomato}
        selected
      >
        {offerType}
      </Chip>
    </SafeAreaView>
  );
};
export default PriceAndOfferType;
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    marginLeft: 10,
    height: 44,
  },
  chip: {
    marginTop: 5,
    alignSelf: 'center',
    marginRight: 8,
  },
});
