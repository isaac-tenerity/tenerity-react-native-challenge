/**
 * @description Gets the tag objects for an offer.
 * @param tagIdsArray An array of tag ids that are linked to an offer.
 * @param tags The tag records.
 * @returns The Tag objects for an offer.
 */
export const getOfferTags = (tagIdsArray, tags) => {
  const offerTags = tags.filter(tag => tagIdsArray.includes(tag.id));
  return offerTags;
};
