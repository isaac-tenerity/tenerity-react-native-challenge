import axios from 'axios';
import { SERVER_URL } from '../../application/utils/Urls';
import * as AxiosLogger from 'axios-logger';

const httpClient = axios.create({
  baseURL: SERVER_URL,
  timeout: 15000,
  withCredentials: false,
});
// logs the request and the errors if exists
httpClient.interceptors.request.use(
  AxiosLogger.requestLogger,
  AxiosLogger.errorLogger
);
// logs the response and the errors if exists
httpClient.interceptors.response.use(
  AxiosLogger.responseLogger,
  AxiosLogger.errorLogger
);
export default httpClient;
