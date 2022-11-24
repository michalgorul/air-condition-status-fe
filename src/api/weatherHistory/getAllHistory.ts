import axios from 'axios';
import { WeatherHistory } from 'src/types/types';

const baseUrl = `${process.env.REACT_APP_BE_URL}`;

const getAllHistory = async () => {
  return axios.get<WeatherHistory[]>(`${baseUrl}/history`, {
    params: {},
  });
};

export default getAllHistory;
