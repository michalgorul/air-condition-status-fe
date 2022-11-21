import axios from 'axios';
import { ForecastResponse } from 'src/types/types';

const baseUrl = `${process.env.REACT_APP_BE_URL}`;

const getForecast = async (lat: string, lon: string) => {
  return axios.get<ForecastResponse>(`${baseUrl}/forecast`, {
    params: { lat, lon },
  });
};

export default getForecast;
