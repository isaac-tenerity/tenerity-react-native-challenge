import { atom, selector } from 'recoil';
import {OffersType} from '../types';

export const OffersData = atom({
    key: 'OffersList',
    default:[]
})

export const SelectedOffers = atom({
    key: 'SelectedOffersList',
    default: []
});

//selectors provide derived data and each time the above atoms state are updated the selector runs
//so using selectors to calculate and return offers and totalAmount

//returns the unselected offers used for offers(main) screen
export const NewOffersList = selector({
    key:'newOffersSelector',
    get: ({get}) => {
        const offers = get(OffersData);
        const selectedOffers = get(SelectedOffers);

        const currentAvailableOffers = offers.filter((v)=>!selectedOffers.includes(v.id));
        console.log(currentAvailableOffers, "currentOffers");

        return currentAvailableOffers;
    }
});


//calculates the selected offers and totalamount, used for selected offers screen
export const SelectedOffersList = selector({
    key:'SelectedOffersSelector',
    get: ({get}) => {
        const offers = get(OffersData);
        const selectedOffers = get(SelectedOffers);

        const currentAvailableOffers: Array<OffersType> = offers.filter((v)=>selectedOffers.includes(v.id));

        const totalAmount:number = currentAvailableOffers.reduce((acc, curr)=>{
            acc+= curr.price;
            return acc;
        }, 0)

        return {currentAvailableOffers, totalAmount};
    }
});

