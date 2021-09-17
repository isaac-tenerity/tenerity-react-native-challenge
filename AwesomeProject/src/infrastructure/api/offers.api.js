import httpClient from './httpClient';
import { GET_OFFERS_URL } from '../../application/utils/Urls';

const getOffersRequest = async () => await httpClient.get(GET_OFFERS_URL);
export { getOffersRequest };
