import React, { useCallback, useEffect, useState } from 'react';
import Title from 'src/atoms/title/Title';
import getAllPolishCitiesNonCategorized from 'src/api/iqAir/getAllPolishCitiesNonCategorized';
import { CitiesCategorized } from 'src/types/types';
import CitiesTable from 'src/components/citiesTable/CitiesTable';
import HomeButton from 'src/atoms/homeButton/HomeButton';

interface Props {}

const Cities: React.FC<Props> = () => {
  const [cities, setCities] = useState<CitiesCategorized>();
  const getCities = useCallback(() => {
    getAllPolishCitiesNonCategorized().then(response => {
      setCities(response.data);
    });
  }, []);

  useEffect(() => {
    if (!cities) getCities();
  }, [cities, getCities]);

  return (
    <>
      <HomeButton />
      <Title title={'Available Cities'} />
      <CitiesTable visible={true} cities={cities} />
    </>
  );
};

export default Cities;
