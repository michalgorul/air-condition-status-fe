import axios from 'axios';
import { ResponseList } from 'src/types/types';

const baseUrl = `${process.env.REACT_APP_BE_URL}`;

const getAvailableStates = async (country: string) => {
  return axios.get<Promise<ResponseList>>(`${baseUrl}/states/${country}`, {
    params: { country },
  });
};

export default getAvailableStates;
