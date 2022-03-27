import { useQuery } from 'react-query';
import { updateUserOffers } from '@/api/ApiQueries';

const updateUser = async () => {
  const { data } = await updateUserOffers();
  return data;
};

const useUpdateUser = () => useQuery('user-offers', updateUser);

export default useUpdateUser;
