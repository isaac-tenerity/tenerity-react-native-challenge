import {
  GET_USER_URL,
  REGISTER_USER_URL,
  GET_USER_OFFER_URL,
} from '../../application/utils/Urls';
import httpClient from './httpClient';

const registerUserRequest = async userInfo =>
  await httpClient.post(REGISTER_USER_URL, userInfo);

const getUserInfoRequest = async id => await httpClient.get(GET_USER_URL(id));

const getUserSelectedOffersRequest = async ids =>
  await httpClient.get(GET_USER_OFFER_URL(ids));

const addOfferRequest = async (id, data) =>
  await httpClient.put(GET_USER_URL(id), data);

const removeOfferRequest = async ids =>
  await httpClient.delete(GET_USER_URL(ids));

export {
  registerUserRequest,
  getUserInfoRequest,
  getUserSelectedOffersRequest,
  addOfferRequest,
  removeOfferRequest,
};
