const sortPromotedFirst = offers => {
  return offers.reduce((acc, element) => {
    if (element?.promoted) {
      return [element, ...acc];
    }
    return [...acc, element];
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
