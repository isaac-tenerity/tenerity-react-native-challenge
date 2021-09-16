import { REGISTER_USER_URL } from '../../application/utils/Urls';
import httpClient from './httpClient';

const registerUserRequest = async userInfo =>
  await httpClient.post(REGISTER_USER_URL, userInfo);

export { registerUserRequest };
