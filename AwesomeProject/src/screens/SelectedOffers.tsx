import * as React from 'react';
import {SafeAreaView} from 'react-native';
import {CustomFlatList, PlaceHolderComponent, WrapperStyles} from '../Components';
import {useRecoilState, useRecoilValue} from 'recoil';
import {SelectedOffers, SelectedOffersList} from '../GlobalState';
import {UserType, listWithAmount} from '../types';
import {useAPICall} from '../customHooks';

type SelectedOffersProps = {}

const SelectedOffersComp = (props: SelectedOffersProps) => {
  const {currentAvailableOffers, totalAmount} = useRecoilValue<listWithAmount>(SelectedOffersList);
  const [currentSelectedOffers , setSelectedOffers ]= useRecoilState<Array<number>>(SelectedOffers);

  const {isLoading, errorBox, apiRequest} = useAPICall();

  const deleteOfferSelected = (offerId:number) => {
      let selectedOffers = currentSelectedOffers.filter((v)=>v!=offerId);

      const handler =(data) => {
        if(errorBox.error) return;
        const userData: UserType = data;
        setSelectedOffers(userData.selectedOffers);
      }

      apiRequest({url:"users/1", body:{selectedOffers}, method:"PATCH"}, handler);
  }

  return (
    <SafeAreaView style={WrapperStyles.safeArea}>
      {(isLoading || errorBox.error)? 
      <PlaceHolderComponent/>
      :<CustomFlatList 
        offerData={currentAvailableOffers} 
        totalAmount={totalAmount}
        offerSelectHandler={deleteOfferSelected} 
        selected={true} />}
    </SafeAreaView>
  );
};

export default SelectedOffersComp;
