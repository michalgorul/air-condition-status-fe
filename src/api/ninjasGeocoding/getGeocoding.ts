import axios from 'axios';
import { GeocodingResponse } from 'src/types/types';

const baseUrl = `${process.env.REACT_APP_BE_URL}`;

const getForecast = async (city: string, country?: string) => {
  return axios.get<GeocodingResponse>(`${baseUrl}/geolocation`, {
    params: { city, country },
  });
};

export default getForecast;
