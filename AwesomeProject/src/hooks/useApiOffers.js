import { useQuery } from 'react-query';
import { getAllOffers } from '../src/api/ApiQueries';

const getOffers = async () => {
  const { data } = await getAllOffers();
  return data;
};

const useGetOffers = () => useQuery('offers', getOffers);

export default useGetOffers;
