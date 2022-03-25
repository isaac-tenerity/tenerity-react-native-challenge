import { useQuery } from 'react-query';
import { getAllTags } from '@/api/ApiQueries';

const getTags = async () => {
  const { data } = await getAllTags();
  return data;
};

const useGetTags = () => useQuery('offers', getTags);

export default useGetTags;
