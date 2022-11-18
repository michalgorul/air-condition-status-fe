import axios from 'axios';
import { WeatherDataResponse } from 'src/types/types';

const baseUrl = `${process.env.REACT_APP_BE_URL}`;

const getCityDataCoordinates = async (lat: string, lon: string) => {
  return axios.get<WeatherDataResponse>(
    `${baseUrl}/nearest_city/${lat}/${lon}`,
    {}
  );
};

export default getCityDataCoordinates;
