import {
  GET_OFFERS_URL,
  REGISTER_USER_URL,
} from '../../application/utils/Urls';
import httpClient from './httpClient';

const registerUserRequest = async userInfo =>
  await httpClient.post(REGISTER_USER_URL, userInfo);

const getOffersRequest = async () => await httpClient.get(GET_OFFERS_URL);

export { registerUserRequest, getOffersRequest };
