import axios from 'axios';
import { ResponseList } from 'src/types/types';

const baseUrl = `${process.env.REACT_APP_BE_URL}`;

const getAvailableCities = async (country: string, state: string) => {
  return axios.get<Promise<ResponseList>>(
    `${baseUrl}/cities/${country}/${state}`,
    {}
  );
};

export default getAvailableCities;
