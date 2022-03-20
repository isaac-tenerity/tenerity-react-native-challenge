import * as React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';

import {OffersType} from '../types';
import ListCard from './ListCard';

type CustomFlatListProps = {
    offerData: Array<OffersType>
    offerSelectHandler:Function
    selected: boolean,
    totalAmount?: number
}

const CustomFlatList = ({offerData, offerSelectHandler, selected, totalAmount}: CustomFlatListProps) => {

  const renderItem = ({item}:{ item : OffersType;}) => (
      <ListCard
        item={item}
        offerSelectHandler={offerSelectHandler}
        selected={selected}
      />
  )

  return (
    <View style={styles.safeArea}>
       <View style={styles.topStyle} >
            <Text
              style={styles.topTextStyle}>
                {(selected)? `$ ${totalAmount}`: "New Offers"}
            </Text>
        </View>
        
        <FlatList
          data={offerData}
          renderItem={renderItem}
          horizontal={true}
          keyExtractor={item => (item.id).toString()}
          showsHorizontalScrollIndicator={false}
        />
      </View>
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
