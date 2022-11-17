import React, { useCallback, useEffect, useState } from 'react';
import Title from 'src/atoms/title/Title';
import HomeButton from 'src/atoms/homeButton/HomeButton';
import Weather from 'src/components/weather/Weather';
import Pollution from 'src/components/pollution/Pollution';
import { WeatherDataResponse } from 'src/types/types';
import getCityData from 'src/api/iqAir/getCityData';
import { useParams } from 'react-router-dom';
import { Button, NavLink } from 'react-bootstrap';

interface Props {}

const WeatherPollutionState: React.FC<Props> = () => {
  const { country, state, city } = useParams();
  const [cityData, setCityData] = useState<WeatherDataResponse>();
  const getCity = useCallback(() => {
    getCityData(country || '', state || '', city || '').then(response => {
      setCityData(response.data);
    });
  }, [city, country, state]);

  useEffect(() => {
    getCity();
  }, [cityData, getCity]);
  return (
    <>
      <HomeButton
        children={
          <NavLink href={'/cities'} className={'ms-2'}>
            <Button className={'btn-sm'}>Cities List</Button>
          </NavLink>
        }
      />
      <Title title={'Weather and Pollution State'} />
      <Weather data={cityData} />
      <Pollution data={cityData} />
    </>
  );
};

export default WeatherPollutionState;
