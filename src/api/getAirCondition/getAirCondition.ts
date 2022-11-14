import axios from 'axios';
import { Coordinates } from 'src/components/locationInput/LocationInput';

const getAirCondition = async (coords: Coordinates) => {
  return axios.get('/', {
    params: {
      latitude: coords.latitude,
      longitude: coords.longitude,
    },
  });
};
