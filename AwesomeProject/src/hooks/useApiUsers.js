import { QueryClient, useMutation } from 'react-query';
import { updateUserOffers } from '@/api/ApiQueries';

const updateUser = async offerIds => {
  const { data } = await updateUserOffers(offerIds);
  return data;
};

const useUpdateUser = () =>
  useMutation(offerIds => updateUser(offerIds), {
    onSuccess: () => {
      QueryClient.invalidateQueries('user');
    },
  });

export default useUpdateUser;
