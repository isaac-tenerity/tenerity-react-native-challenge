const sortPromotedFirst = offers => {
  return offers.reduce((acc, offer) => {
    if (offer?.promoted) {
      return [offer, ...acc];
    }
    return [...acc, offer];
  }, []);
};

const attachTagsToOffer = (offer, tags) => {
  let offerTags = [];

  offer?.tagIds.map(tagId => {
    let tag = tags.find(item => tagId === item.id);
    offerTags.push(tag);
  });
  offer.offerTags = offerTags;
  return offer;
};

export { sortPromotedFirst, attachTagsToOffer };
