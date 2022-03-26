/**
 * @description Checks to see if offer is added in the user's selected offers.
 * @param offerId The offer to check if it is already included in my offers.
 * @param myOffers The offers added by the user.
 * @returns If offer exists.
 */
export const doesMyOfferExist = (offerId, myOffers) => {
  let offerFound = false;
  myOffers?.length > 0 &&
    myOffers.map(offer => {
      if (offer.id === offerId) {
        offerFound = true;
      }
    });
  return offerFound;
};
