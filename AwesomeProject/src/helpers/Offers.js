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

/**
 * @description Plucks the offers IDs from the offer records.
 * @param offers The offer objects.
 * @returns The offer ids.
 */
export const pluckOfferIdsFromOffers = offers => {
  let offerIds = [];
  if (offers && offers.length > 0) {
    offers.map(offer => offerIds.push(offer.id));
  }
  return offerIds;
};

/**
 * Sorts offers by their promoted property.
 * @param offers The offer records.
 * @returns Sorted Offers by promoted property.
 */
export const sortPromotedOffersFirst = offers => {
  const sortedByPromotedProperty = offers.sort(function (left, right) {
    return left.hasOwnProperty('promoted')
      ? -1
      : right.hasOwnProperty('promoted')
      ? 1
      : 0;
  });
  return sortedByPromotedProperty;
};
