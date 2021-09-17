import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { colors } from '../../application/common/colors';
import { spacing, text } from '../../application/common/sizes';
import Icon from '../../infrastructure/globalComponents/Icon';
import ReduxContainer from '../containers/ReduxContainer';

const onRemovePressed = (removeUserOffer, user, offerId) => {
  Alert.alert(
    'Remove Offer',
    'Are you sure you want to remove the offer from your offers list',
    [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'Remove',
        onPress: () => removeUserOffer(user, offerId),
        style: 'destructive',
      },
    ]
  );
};

const OfferItem = ({ item, onPress, removeUserOffer, user }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.mainContainer}>
      <View style={styles.imageTextContainer}>
        <View style={{ flex: 0.3 }}>
          <Image source={{ uri: item.image }} style={styles.image} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.titleText}>{item.title}</Text>
          <Text style={styles.priceText}>{item.price}$</Text>
        </View>
        <TouchableOpacity
          style={styles.removeIconContainer}
          onPress={() => onRemovePressed(removeUserOffer, user, item?.id)}
        >
          <Icon
            type={'ionicon'}
            name={'trash'}
            size={text.NORMAL}
            color={colors.danger}
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.primary,
    padding: spacing.NORMAL,
    margin: spacing.NORMAL,
    height: 120,
    borderRadius: 10,
  },
  imageTextContainer: {
    flexDirection: 'row',
    flex: 1,
  },
  image: {
    height: null,
    width: null,
    flex: 1,
    borderRadius: 10,
  },
  titleText: {
    color: colors.secondary,
    fontSize: text.NORMAL,
  },
  priceText: {
    color: colors.secondary,
    textAlign: 'right',
  },
  textContainer: {
    flex: 0.7,
    padding: spacing.SMALL,
    justifyContent: 'space-between',
  },
  removeIconContainer: {
    padding: spacing.SMALL,
    height: 30,
  },
});

export default ReduxContainer(OfferItem);
