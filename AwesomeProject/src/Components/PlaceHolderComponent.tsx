import * as React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import {
    Placeholder,
    PlaceholderMedia,
    PlaceholderLine,
    Shine,
    Fade,
  } from 'rn-placeholder';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

interface PlaceHolderComponentProps {}


const PlaceHolderComponent = (props: PlaceHolderComponentProps) => {
  return (
    <View style={[styles.contentWrapper, {height:windowHeight*0.4, flex:0.6}]}>
      
    <View style={[styles.placeholderWrapper, {paddingHorizontal:10}]}>
      <Placeholder
        Animation={Fade}
      >
        <PlaceholderLine width={100} height={75} />
      </Placeholder>

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
  </View>
  );
};

export default PlaceHolderComponent;

export const styles = StyleSheet.create({
    contentWrapper: {
      flex: 0.7,
      alignSelf:"center",
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: '#fff',
      width: windowWidth * 0.8,
      height: windowHeight * 0.5,
      borderWidth: 1,
      marginHorizontal:20,
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
    placeholderWrapper: {
      marginTop: 10,
    },
    placeholderTitle: {
      fontSize: 15,
      alignSelf: 'flex-start',
      marginBottom: 12,
      color:"#bfbfbf"
    },
  });

