import { QueryClient, useMutation, useQuery } from 'react-query';
import { getUserAccount, updateUserOffers } from '@/api/ApiQueries';
import { pluckOfferIdsFromOffers } from '@/helpers/Offers';

const updateUser = async ({ myOffers: offers, userData: user }) => {
  const offerIds = pluckOfferIdsFromOffers(offers);
  const { data } = await updateUserOffers(offerIds, user);
  return data;
};

const useUpdateUser = () =>
  useMutation(params => updateUser(params), {
    onSuccess: () => {
      QueryClient.invalidateQueries('user');
    },
  });

const getUser = async () => {
  const { data } = await getUserAccount();
  return data;
};

export const useGetUser = () => useQuery('user', getUser);

export default useUpdateUser;
