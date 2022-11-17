import axios from 'axios';
import { CitiesCategorized } from 'src/types/types';

const baseUrl = `${process.env.REACT_APP_BE_URL}`;

const getAllPolishCitiesNonCategorized = async () => {
  return axios.get<CitiesCategorized>(
    `${baseUrl}/Poland/cities/all/categorized`,
    {}
  );
};

export default getAllPolishCitiesNonCategorized;
