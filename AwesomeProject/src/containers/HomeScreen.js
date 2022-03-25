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
} from 'react-native';
import {
  Placeholder,
  PlaceholderMedia,
  PlaceholderLine,
  Shine,
  Fade,
} from 'rn-placeholder';

import LogoImage from '@/assets/logo.png';

const HomeScreen = () => {
  const { data: offers, isLoading, isSuccess } = useGetOffers();
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" />
      <View style={styles.contentWrapper}>
        <View style={styles.logoWrapper}>
          <Image source={LogoImage} style={styles.logoImage} />
        </View>

        <View style={styles.placeholderWrapper}>
          <Text style={styles.placeholderTitle}>voluptas sed aut</Text>
          <Placeholder
            Animation={Fade}
            Left={PlaceholderMedia}
            Right={PlaceholderMedia}
          >
            <PlaceholderLine width={80} />
            <PlaceholderLine />
            <PlaceholderLine />
            <PlaceholderLine width={60} />
            <PlaceholderLine width={30} />
          </Placeholder>
        </View>

        <View style={styles.placeholderWrapper}>
          <Text style={styles.placeholderTitle}>nihil mollitia aut</Text>
          <Placeholder Animation={Shine} Left={PlaceholderMedia}>
            <PlaceholderLine />
            <PlaceholderLine width={90} />
          </Placeholder>
        </View>
      </View>
    </SafeAreaView>
  );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#e1e1e1',
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
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  logoImage: {
    width: 160,
    height: 55,
  },
  placeholderWrapper: {
    marginTop: 32,
  },
  placeholderTitle: {
    fontSize: 24,
    alignSelf: 'flex-start',
    marginBottom: 12,
  },
});

export default HomeScreen;
