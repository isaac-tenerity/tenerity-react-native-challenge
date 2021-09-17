import { GET_TAGS_URL } from '../../application/utils/Urls';
import httpClient from './httpClient';

const getTagsRequest = async () => await httpClient.get(GET_TAGS_URL);

export { getTagsRequest };
