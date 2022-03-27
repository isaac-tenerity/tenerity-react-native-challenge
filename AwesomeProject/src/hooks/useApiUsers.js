import { QueryClient, useMutation } from 'react-query';
import { updateUserOffers } from '@/api/ApiQueries';
import { pluckOfferIdsFromOffers } from '@/helpers/Offers';

const updateUser = async offers => {
  const offerIds = pluckOfferIdsFromOffers(offers);
  const { data } = await updateUserOffers(offerIds);
  return data;
};

const useUpdateUser = () =>
  useMutation(offers => updateUser(offers), {
    onSuccess: () => {
      QueryClient.invalidateQueries('user');
    },
  });

export default useUpdateUser;
