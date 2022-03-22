import * as React from 'react';
import { Text, View, Image, StyleSheet, Animated, Dimensions } from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { OffersType } from '../types';
import {styles as wrapperStyle} from './PlaceHolderComponent';
const windowWidth = Dimensions.get('window').width;

type ListCardProps = {
    item: OffersType,
    selected:boolean
    offerSelectHandler:Function,
    translateX:Animated.AnimatedInterpolation,
    scale:Animated.AnimatedInterpolation,
    opacity:Animated.AnimatedInterpolation,
}

const ListCard = ({item, selected, offerSelectHandler, translateX, scale, opacity}: ListCardProps) => {
  return (
    <Animated.View style={
        { 
          position:"absolute",
          left: -(windowWidth * 0.8)/1.7,
          opacity,
          transform: [
            {
              translateX,
            },
            { scale },
          ],
        }}
    >
      <View style={wrapperStyle.contentWrapper}>
        <Image 
          source={{uri:item.image}} 
          style={styles.imageStyle} 
          resizeMode="cover"
        />

        {item.promoted && <Text
            style={styles.promotedStyle}
        >
            PROMOTED
        </Text>}
        
        <View style={wrapperStyle.placeholderWrapper}>
          <Text style={styles.titleStyle}>{item.title}</Text> 
        </View>

        <View style={styles.descriptionWrapper}>
          <Text style={styles.descriptionTextStyle}>{item.description?.substring(30)}</Text>
        </View>

        <View style={styles.bunttonContainer} >
          <Text style={[styles.titleStyle, {color:"#70aa85", fontSize:20}]} >
            {`$ ${item.price}`}
          </Text>

          <TouchableOpacity 
            style={[styles.buttonStyle, {backgroundColor:(selected)?"#ce7575" : "#6dbc92"}]} 
            onPress={()=>offerSelectHandler(item.id)}
          >
              <Text style={[styles.buttonTextStyle, {color:(selected)? "white": "#2b2a2a"}]} >
                  {(selected)? "#": "+"}
              </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
    safeArea: {
        flex:1,
        backgroundColor: 'white',
        justifyContent:"flex-start",
        alignItems: 'center',
    },
    imageStyle:{ 
        width:"100%", 
        height:"30%", 
        borderTopLeftRadius:16, 
        borderTopRightRadius:16
    },
    promotedStyle: {
      color:"#f3ff72", 
      fontWeight:"bold", 
      fontSize:13,
      marginTop:3, 
      height:20, 
      position:"absolute", 
      top: 5, 
      left:5
    },
    titleStyle:{
      fontSize:15, 
      fontWeight: "bold", 
      color:"#2b2a2a"
    },
    descriptionWrapper:{
      height:"30%", 
      width:"95%", 
      alignSelf:"center", 
      justifyContent:"center", 
      alignItems:"center"
    },
    descriptionTextStyle:{
      fontSize:13, 
      fontWeight: "bold", 
      color:"#a5a4a4"
    },
    bunttonContainer:{
      width:"100%", 
      height:50, 
      flexDirection:"row", 
      justifyContent:"space-evenly", 
      alignItems:"center"
    },
    buttonStyle:{
      width:40, 
      height:40, 
      justifyContent:"center", 
      alignItems:"center",
      borderRadius:20,
      marginTop:10,
    },
    buttonTextStyle:{
      fontSize:20, 
      fontWeight:"bold"}
  });

export default ListCard;
