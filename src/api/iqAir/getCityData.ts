import axios from 'axios';
import { WeatherDataResponse } from 'src/types/types';

const baseUrl = `${process.env.REACT_APP_BE_URL}`;

const getNearestCityData = async (
  country: string,
  state: string,
  city: string
) => {
  return axios.get<WeatherDataResponse>(
    `${baseUrl}/city/${country}/${state}/${city}`,
    {}
  );
};

export default getNearestCityData;
