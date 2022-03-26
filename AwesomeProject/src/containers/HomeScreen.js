import useGetOffers from '@/hooks/useApiOffers';
import React from 'react';
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
const HomeScreen = () => {
  const { data: offers, isLoading, error, isSuccess } = useGetOffers();
  const {
    data: allTags,
    isLoading: isTagsQueryLoading,
    error: tagsError,
    isSuccess: isTagsQuerySucces,
  } = useGetTags();
  const scrollX = React.useRef(new Animated.Value(0)).current;

  if (isLoading) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <ActivityIndicator size="large" />
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar translucent backgroundColor="transparent" />
      <BlurredBGImage offers={offers} scrollX={scrollX} />
      <View style={[styles.logoWrapper]}>
        <Image source={LogoImage} style={styles.logoImage} />
      </View>
      {error && (
        <View style={[styles.logoWrapper]}>
          <Text>Error fetching data. Resorting to offline mode.</Text>
        </View>
      )}
      <Animated.FlatList
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        data={offers || []}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        pagingEnabled
        renderItem={({ item, index }) => {
          return (
            <OfferItem
              {...item}
              index={index}
              scrollXP={scrollX}
              allTags={allTags}
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
    backgroundColor: Colors.safeAreaBg,
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
