import { createSlice } from '@reduxjs/toolkit';

/**
 * Redux slice for offer records
 */
export const offersSlice = createSlice({
  name: 'offers',
  initialState: {
    allOffers: [],
    myOffers: [],
  },
  reducers: {
    setAllOffers: (state, action) => {
      state.allOffers = action.payload;
    },
    setMyOffers: (state, action) => {
      state.myOffers = action.payload;
    },
    addOfferToMyOffers: (state, action) => {
      const newMyOffer = action.payload;
      let myOffers = state.myOffers ? [...state.myOffers] : [];
      if (newMyOffer?.id) {
        let doesMyOfferExists = null;
        if (myOffers?.length > 0) {
          doesMyOfferExists = myOffers.find(
            offer => offer.id === newMyOffer.id
          );
        }
        if (!doesMyOfferExists) {
          myOffers.push(newMyOffer);
          state.myOffers = myOffers;
        } else {
          alert('offer already added');
        }
      }
    },
    removeOfferFromMyOffers: (state, action) => {
      const newMyOfferId = action.payload;
      let myOffers = state.myOffers ? [...state.myOffers] : [];
      if (newMyOfferId && myOffers?.length > 0) {
        const newMyOffers = myOffers.filter(offer => offer.id !== newMyOfferId);
        state.myOffers = newMyOffers;
      }
    },
  },
});

// ACTIONS export
export const {
  setAllOffers,
  addOfferToMyOffers,
  removeOfferFromMyOffers,
  setMyOffers,
} = offersSlice.actions;
export default offersSlice.reducer;
