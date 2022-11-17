import React, { useMemo } from 'react';
import Container from 'react-bootstrap/Container';
import { WeatherDataResponse } from 'src/types/types';
import { Row, Table } from 'react-bootstrap';

interface Props {
  data?: WeatherDataResponse;
}
const Pollution: React.FC<Props> = props => {
  const { data } = props;
  const listValues = useMemo(() => {
    const pollution = data?.data.current.pollution;
    const timestampString = pollution?.timestamp
      ? new Date(pollution?.timestamp).toLocaleDateString()
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
            <td>AQI value based on US EPA standard</td>
            <td>{pollution?.aqius}</td>
          </tr>
          <tr>
            <td>Main pollutant for US AQI</td>
            <td>{pollution?.mainus}</td>
          </tr>
          <tr>
            <td>AQI value based on China MEP standard</td>
            <td>{pollution?.aqicn}</td>
          </tr>
          <tr>
            <td>Main pollutant for Chinese AQI</td>
            <td>{pollution?.maincn}</td>
          </tr>
        </tbody>
      </Table>
    );
  }, [data]);
  return (
    <>
      <Container className='d-flex justify-content-center mb-4'>
        <Row>
          <h3>Pollution</h3>
        </Row>
      </Container>
      <Container className='d-flex justify-content-center mb-4'>
        {listValues}
      </Container>
    </>
  );
};

export default Pollution;
