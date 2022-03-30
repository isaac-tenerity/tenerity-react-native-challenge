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

/**
 * Gets the user's account
 * @returns The user account object.
 */
export const getUserAccount = async () =>
  await apiClient.get(`/users/${Config.USER_ID}`);

/**
 * @description Sets the user's current offer ids to their server record.
 * @param offerIds The offer ids
 * @param user The user object.
 */
export const updateUserOffers = async (offerIds, user) =>
  await apiClient.put(`/users/${Config.USER_ID}`, {
    ...user,
    selectedOffers: offerIds,
  });
