import React, { useCallback, useEffect, useState } from 'react';
import { Button, Container, NavLink } from 'react-bootstrap';
import { useLocation, useParams } from 'react-router-dom';
import getCityData from 'src/api/iqAir/getCityData';
import HomeButton from 'src/atoms/homeButton/HomeButton';
import Title from 'src/atoms/title/Title';
import Pollution from 'src/components/pollution/Pollution';
import Weather from 'src/components/weather/Weather';
import { ForecastResponse, WeatherDataResponse } from 'src/types/types';
import Forecast from 'src/components/forecast/Forecast';
import getForecast from 'src/api/openMeteo/getForecast';

interface Props {}

const WeatherPollutionForecastState: React.FC<Props> = () => {
  const { state } = useLocation();
  const { country, state: cityState, city } = useParams();
  const [cityData, setCityData] = useState<WeatherDataResponse>();
  const [forecastData, setForecastData] = useState<ForecastResponse>();
  const [requestPollutionSent, setRequestPollutionSent] = useState(false);
  const [requestForecastSent, setRequestForecastSent] = useState(false);

  const getPollutionData = useCallback(() => {
    if (!state) {
      getCityData(country || '', cityState || '', city || '').then(response => {
        setCityData(response.data);
      });
    } else setCityData(state.weather);
  }, [city, cityState, country, state]);

  const getForecastData = useCallback(() => {
    if (cityData) {
      const [lat, lon] = cityData.data.location.coordinates;
      getForecast(lon.toString(), lat.toString()).then(response => {
        setForecastData(response.data);
      });
    }
  }, [cityData]);

  useEffect(() => {
    if (!requestPollutionSent) {
      setRequestPollutionSent(true);
      getPollutionData();
    }
  }, [cityData, getPollutionData, requestPollutionSent]);

  useEffect(() => {
    if (!requestForecastSent && cityData) {
      setRequestForecastSent(true);
      getForecastData();
    }
  }, [
    cityData,
    getForecastData,
    getPollutionData,
    requestForecastSent,
    requestPollutionSent,
  ]);
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

      <Container className='d-flex justify-content-center mt-4 mb-4 text-white text-center display-5'>
        Conditions in {city}, {cityState}, {country}
      </Container>
      <Weather data={cityData} />
      <Pollution data={cityData} />
      <Forecast data={forecastData} />
    </>
  );
};

export default WeatherPollutionForecastState;
