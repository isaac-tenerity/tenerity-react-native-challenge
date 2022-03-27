import { useQuery } from 'react-query';
import { getAllTags } from '@/api/ApiQueries';

const updateUserOffers = async () => {
  const { data } = await getAllTags();
  return data;
};

const useUpdateUserOffers = () => useQuery('user-offers', updateUserOffers);

export default useUpdateUserOffers;
