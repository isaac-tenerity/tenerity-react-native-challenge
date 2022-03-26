/**
 * @description Gets the tag objects for an offer.
 * @param tagIdsArray An array of tag ids that are linked to an offer.
 * @param tags The tag records.
 * @returns The Tag objects for an offer.
 */
export const getOfferTags = (tagIdsArray, tags) => {
  let offerTags = [];
  offerTags =
    tags && tags.filter(tag => tagIdsArray && tagIdsArray.includes(tag.id));
  return offerTags;
};
