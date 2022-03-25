import axios from 'axios';
import { Config } from '@/constants/Config';
export const apiClient = axios.create({
  baseURL: Config.API_URL,
});

/**
 * Gets the offer records from the server.
 * @returns The offers response.
 */
export const getAllOffers = async () => await apiClient.get('offers');

/**
 * Gets the offer tag records from the server.
 * @returns The tags response.
 */
export const getAllTags = async () => await apiClient.get('tags');
