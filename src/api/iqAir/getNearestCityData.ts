import axios from 'axios';
import { WeatherDataResponse } from 'src/types/types';

const baseUrl = `${process.env.REACT_APP_BE_URL}`;

const getNearestCityData = async () => {
  return axios.get<Promise<WeatherDataResponse>>(`${baseUrl}/nearest_city`, {});
};

export default getNearestCityData;
