import React, { useCallback, useEffect, useState } from 'react';
import Title from 'src/atoms/title/Title';
import getAllPolishCitiesNonCategorized from 'src/api/iqAir/getAllPolishCitiesNonCategorized';
import { CitiesCategorized } from 'src/types/types';
import CitiesTable from 'src/components/citiesTable/CitiesTable';
import HomeButton from 'src/atoms/homeButton/HomeButton';
import { AxiosError } from 'axios';
import { dismissToasts, showErrorToast } from 'src/utils/toast';
import { ToastContainer } from 'react-toastify';

interface Props {}

const Cities: React.FC<Props> = () => {
  const [cities, setCities] = useState<CitiesCategorized>();
  const getCities = useCallback(() => {
    getAllPolishCitiesNonCategorized()
      .then(response => {
        setCities(response.data);
      })
      .catch((error: AxiosError) => {
        console.log(error);
        dismissToasts();
        if (error.response) showErrorToast(error.response.statusText);
        else showErrorToast(error.message);
      });
  }, []);

  useEffect(() => {
    if (!cities) getCities();
  }, [cities, getCities]);

  return (
    <>
      <ToastContainer />
      <HomeButton />
      <Title title={'Available Cities'} />
      <CitiesTable visible={true} cities={cities} />
    </>
  );
};

export default Cities;
