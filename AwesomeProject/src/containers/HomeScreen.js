import useGetOffers from '@/hooks/useApiOffers';
import React, { useCallback, useEffect } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  Image,
  Dimensions,
  Text,
  Animated,
  ActivityIndicator,
  Platform,
} from 'react-native';

import LogoImage from '@/assets/logo.png';
import { OfferItem } from '@/components/OfferItem';
import BlurredBGImage from '@/components/BlurredBGImage';
import Colors from '@/constants/Colors';
import useGetTags from '@/hooks/useApiTags';
import { useDispatch, useSelector } from 'react-redux';
import {
  addOfferToMyOffers,
  removeOfferFromMyOffers,
  setAllOffers,
  setMyOffers,
} from '@/redux/offersSlice';
import {
  doesMyOfferExist,
  getUserSelectedOffers,
  sortPromotedOffersFirst,
} from '@/helpers/Offers';
import ScreenHeading from '@/components/ScreenHeading';
import useUpdateUser, { useGetUser } from '@/hooks/useApiUsers';
import { setUser } from '@/redux/userSlice';
import { setTags } from '@/redux/tagsSlice';
const HomeScreen = () => {
  const dispatch = useDispatch();
  const myOffersCache = useSelector(state => state.offers.myOffers);
  const allOffersCache = useSelector(state => state.offers.allOffers);
  const allTagsCache = useSelector(state => state.tags.tags);
  const userDataCache = useSelector(state => state.user.account);
  const scrollX = React.useRef(new Animated.Value(0)).current;

  const {
    data: offers,
    isLoading: isOffersLoading,
    error: offersError,
    isSuccess: isGetOffersSuccess,
  } = useGetOffers();

  const {
    data: user,
    isLoading: isGetUserLoading,
    error: getUserError,
    isSuccess: isGetUserSuccess,
    refetch: refetchUserAccount,
  } = useGetUser();

  const { mutate: mutateUserOffers, isSuccess: isMutateUserOffersSuccess } =
    useUpdateUser();

  const {
    data: allTags,
    isLoading: isTagsQueryLoading,
    error: tagsError,
    isSuccess: isTagsQuerySucces,
  } = useGetTags();

  useEffect(() => {
    if (!userDataCache && isGetUserSuccess && isGetOffersSuccess) {
      dispatch(setMyOffers(getUserSelectedOffers(offers, user)));
    }
  }, [
    dispatch,
    user,
    offers,
    userDataCache,
    isGetUserSuccess,
    isGetOffersSuccess,
  ]);

  useEffect(() => {
    isGetUserSuccess && dispatch(setUser(user));
    isGetOffersSuccess && dispatch(setAllOffers(offers));
    isTagsQuerySucces && dispatch(setTags(allTags));
  }, [
    dispatch,
    user,
    offers,
    allTags,
    isGetUserSuccess,
    isGetOffersSuccess,
    isTagsQuerySucces,
  ]);

  const handleAddOrRemoveOfferPress = useCallback(
    offer => {
      if (
        myOffersCache &&
        offer?.id &&
        doesMyOfferExist(offer.id, myOffersCache)
      ) {
        dispatch(removeOfferFromMyOffers(offer.id));
      } else {
        dispatch(addOfferToMyOffers(offer));
      }
    },
    [dispatch, myOffersCache]
  );

  useEffect(() => {
    if (userDataCache) {
      mutateUserOffers({ myOffers: myOffersCache, userData: userDataCache });
    }
  }, [mutateUserOffers, myOffersCache, refetchUserAccount, userDataCache]);

  useEffect(() => {
    refetchUserAccount();
  }, [refetchUserAccount, isMutateUserOffersSuccess]);

  if (isOffersLoading || isTagsQueryLoading || isGetUserLoading) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <ActivityIndicator size="large" />
      </SafeAreaView>
    );
  }

  let requestError = offersError || getUserError || tagsError;

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar translucent backgroundColor="transparent" />
      <BlurredBGImage offers={allOffersCache} scrollX={scrollX} />
      <View style={[styles.logoWrapper]}>
        <Image source={LogoImage} style={styles.logoImage} />
      </View>
      {requestError && (
        <View style={[styles.logoWrapper]}>
          <Text>Error fetching data. Resorting to offline mode.</Text>
        </View>
      )}
      <ScreenHeading heading={'Home'} />
      <Animated.FlatList
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        data={sortPromotedOffersFirst(allOffersCache) || []}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        pagingEnabled
        renderItem={({ item, index }) => {
          return (
            <OfferItem
              handleAddOrRemoveOfferPress={handleAddOrRemoveOfferPress}
              {...item}
              offerRecord={item}
              index={index}
              scrollXP={scrollX}
              allTags={allTagsCache}
              doesOfferExistInMyOffers={doesMyOfferExist(
                item.id,
                myOffersCache
              )}
            />
          );
        }}
      />
    </SafeAreaView>
  );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.black,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    flex: 1,
    flexDirection: 'column',
  },
  contentWrapper: {
    flex: 1,
    padding: 16,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: windowWidth * 0.95,
    height: windowHeight * 0.95,
    borderWidth: 1,
    borderColor: '#e1e1e1',
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  logoWrapper: {
    borderRadius: 20,
    borderColor: Colors.tomato,
    borderWidth: 2,
    padding: 7,
    paddingHorizontal: 30,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
    marginHorizontal: 20,
    marginTop: Platform.OS === 'android' ? 40 : 0,
  },
  logoImage: {
    width: 124,
    height: 43,
  },
  placeholderWrapper: {
    marginTop: 32,
  },
  placeholderTitle: {
    fontSize: 23,
    alignSelf: 'flex-start',
    marginBottom: 12,
  },
});

export default HomeScreen;
