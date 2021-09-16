import {
  GET_OFFERS_URL,
  GET_USER_OFFER_URL,
} from '../src/application/utils/Urls';
import { getOffersRequest } from '../src/infrastructure/api/user.api';

test('returns get user offers url correctly', () => {
  const ids = [1, 2, 3];
  expect(GET_USER_OFFER_URL(ids)).toBe('/offers?id=1&id=2&id=3');
});

test('get all offers correctly', async () => {
  const allOffers = await getOffersRequest(GET_OFFERS_URL);
  expect(Array.isArray(allOffers?.data)).toBe(true);
  expect(allOffers?.data[0]).toMatchObject({
    id: 1,
    offerType: 'travel',
    title: 'New York City break',
    description:
      'Praesentium similique deserunt iste ute. Neque voluptate aspernatur aut nesciunt adipisci.',
    tagIds: [1, 3],
    image: 'https://picsum.photos/id/274/400/200',
    price: 249.99,
  });
});
