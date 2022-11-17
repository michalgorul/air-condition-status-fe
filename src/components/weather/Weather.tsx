import React, { useMemo } from 'react';
import Container from 'react-bootstrap/Container';
import { WeatherDataResponse } from 'src/types/types';
import { Row, Table } from 'react-bootstrap';

interface Props {
  data?: WeatherDataResponse;
}

const Weather: React.FC<Props> = props => {
  const { data } = props;

  const listValues = useMemo(() => {
    const weather = data?.data.current.weather;
    const timestampString = weather?.timestamp
      ? new Date(weather?.timestamp).toLocaleDateString()
      : '';
    const temperature =
      weather?.temperature || weather?.temperature === 0
        ? weather?.temperature.toString() + '°'
        : '';
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Description</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Timestamp</td>
            <td>{timestampString}</td>
          </tr>
          <tr>
            <td>Temperature in Celsius</td>
            <td>{temperature}</td>
          </tr>
          <tr>
            <td>Atmospheric pressure in hPa</td>
            <td>{weather?.pressure || ''}</td>
          </tr>
          <tr>
            <td>Humidity %</td>
            <td>{weather?.humidity || ''}</td>
          </tr>
          <tr>
            <td>Wind speed (m/s)</td>
            <td>{weather?.windSpeed || ''}</td>
          </tr>
          <tr>
            <td>
              Wind direction, as an angle of 360° (N=0, E=90, S=180, W=270)
            </td>
            <td>{weather?.windDirection || ''}</td>
          </tr>
        </tbody>
      </Table>
    );
  }, [data]);

  return (
    <>
      <Container className='d-flex justify-content-center mb-4'>
        <Row>
          <h3>Weather</h3>
        </Row>
      </Container>
      <Container className='d-flex justify-content-center mb-4'>
        {listValues}
      </Container>
    </>
  );
};

export default Weather;
