import React, {useCallback, useEffect, useState, useRef} from 'react';
import { Text, View, StyleSheet, FlatList, Animated, Dimensions } from 'react-native';
import {FlingGestureHandler, Directions, State, GestureHandlerRootView} from  'react-native-gesture-handler';
import {OffersType} from '../types';
import ListCard from './ListCard';

const { width } = Dimensions.get('screen');

type CustomFlatListProps = {
    offerData: Array<OffersType>
    offerSelectHandler:Function
    selected: boolean,
    totalAmount?: number
}

const VISIBLE_ITEMS = 3;
const SPACING = 10;

const CustomFlatList = ({offerData, offerSelectHandler, selected, totalAmount}: CustomFlatListProps) => {

  const scrollXIndex = useRef(new Animated.Value(0)).current;
  const scrollXAnimated = useRef(new Animated.Value(0)).current;
  const [INDEX, setIndex] = useState(0);
  const setActiveIndex = (activeIndex) => {
    scrollXIndex.setValue(activeIndex);
    setIndex(activeIndex);
  };

  useEffect(() => {
    Animated.timing(scrollXAnimated, {
      toValue: scrollXIndex,
      useNativeDriver: true,
      duration:300,
    }).start();
  }, []);

  const renderItem = ({item, index}:{ item : OffersType; index:number}) =>{
    const inputRange = [index - 1, index, index + 1];
    const translateX = scrollXAnimated.interpolate({
      inputRange,
      outputRange: [50, 0, -1000],
    });
    const scale = scrollXAnimated.interpolate({
      inputRange,
      outputRange: [0.8, 1, 1.1],
    });
    const opacity = scrollXAnimated.interpolate({
      inputRange,
      outputRange: [1, 1, 0],
    });
    
    return(
      <ListCard
        item={item}
        offerSelectHandler={offerSelectHandler}
        selected={selected}
        translateX={translateX}
        scale={scale}
        opacity={opacity}
      />
  )
}

  return (    
    <GestureHandlerRootView style={styles.safeArea}>
       <View style={styles.topStyle} >
            <Text
              style={styles.topTextStyle}>
                {(selected)? `$ ${totalAmount}`: "New Offers"}
            </Text>
        </View>
      <FlingGestureHandler
        key='left'
        direction={Directions.LEFT}
        onHandlerStateChange={(ev) => {
          if (ev.nativeEvent.state === State.END) {
            if (INDEX === offerData.length - 1) {
              return;
            }
            setActiveIndex(INDEX + 1);
          }
        }}
      >
        <FlingGestureHandler
          key='right'
          direction={Directions.RIGHT}
          onHandlerStateChange={(ev) => {
            if (ev.nativeEvent.state === State.END) {
              if (INDEX === 0) {
                return;
              }
              setActiveIndex(INDEX - 1);
            }
          }}
        >
            <FlatList
              data={offerData}
              renderItem={renderItem}
              horizontal={true}
              scrollEnabled={false}
              removeClippedSubviews={false}
              CellRendererComponent={({
                item,
                index,
                children,
                style,
                ...props
              }) => {
                const newStyle = [style, { zIndex: offerData.length - index }];
                return (
                  <View style={newStyle} index={index} {...props}>
                    {children}
                  </View>
                );
              }}
              contentContainerStyle={{
                flex: 1,
                justifyContent: 'center',
                padding: SPACING * 2,
                marginTop: 50,
              }}
              keyExtractor={item => (item.id).toString()}
              showsHorizontalScrollIndicator={false}
            />
         </FlingGestureHandler>
        </FlingGestureHandler>
      </GestureHandlerRootView>
  );
};

export default CustomFlatList;

export const styles = StyleSheet.create({
    safeArea: {
      flex:1,
      backgroundColor: 'white',
      justifyContent:"center",
      alignItems: 'center',
    },
    topStyle:{
      top:10, 
      position:"absolute",
      justifyContent:"center", 
      alignItems:"center"
    },
    topTextStyle:{
      fontSize:25, 
      fontWeight:"bold", 
      color:"#e55b5b"
    }
  });
