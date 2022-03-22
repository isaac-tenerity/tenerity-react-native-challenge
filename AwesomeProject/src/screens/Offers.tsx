import React, {useEffect} from 'react';
import { SafeAreaView} from 'react-native';
import {useAPICall} from '../customHooks';
import {OffersType, UserType} from '../types';
import {CustomFlatList, PlaceHolderComponent, WrapperStyles} from '../Components';
import {useRecoilState, useSetRecoilState, useRecoilValue} from 'recoil';
import {OffersData, SelectedOffers, NewOffersList} from '../GlobalState';

type OffersProps = {}

const Offers = (props: OffersProps) => {
    const setOffers = useSetRecoilState<Array<OffersType>>(OffersData);
    const [currentSelectedOffers , setSelectedOffers ]= useRecoilState<Array<number>>(SelectedOffers);

    const offers = useRecoilValue<Array<OffersType>>(NewOffersList);

    const {isLoading, errorBox, apiRequest} = useAPICall();
    
    useEffect(()=> {
        const handleOffers = (data) => {   
            if(errorBox.error) return;
            const offersArr:Array<OffersType> = data;
            setOffers(offersArr);
        }

        const userData = (data) => {
            if(errorBox.error) return;
            const userData : UserType = data;
            setSelectedOffers(userData.selectedOffers);
            apiRequest({url:"offers?_sort=promoted", body:null, method: "GET"}, handleOffers);
        }

        apiRequest({url:"users/1", body:null, method: "GET"}, userData);
    }, [apiRequest, errorBox.error]);


    const addOfferToSelected = (offerId: number) => {
      let selectedOffers = [...currentSelectedOffers];
      selectedOffers.push(offerId);

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
            :<CustomFlatList offerData={offers} offerSelectHandler={addOfferToSelected} selected={false} />}
        </SafeAreaView>
      );
};

export default Offers;
