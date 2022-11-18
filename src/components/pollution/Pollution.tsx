import React, { useMemo } from 'react';
import Container from 'react-bootstrap/Container';
import { cnLevelsOfHealthConcern } from 'src/components/pollution/levelsOfHealthConcernCn';
import {
  usLevelsOfHealthConcern,
  LevelOfHealthConcernContent,
} from 'src/components/pollution/levelsOfHealthConcernUs';
import { WeatherDataResponse } from 'src/types/types';
import { Col, Row, Table } from 'react-bootstrap';
import { between } from 'src/utils/between';

interface Props {
  data?: WeatherDataResponse;
}

// TODO fix add space
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

  const usPollutionInfo: LevelOfHealthConcernContent | null = useMemo(() => {
    const currentAqiUs = data?.data.current.pollution.aqius || 0;
    const [usInfo] = usLevelsOfHealthConcern.filter(item => {
      const [min, max] = item.aqiRange;
      return between(currentAqiUs, min, max);
    }, []);
    return usInfo;
  }, [data?.data]);

  const cnPollutionInfo: LevelOfHealthConcernContent | null = useMemo(() => {
    const currentAqiUs = data?.data.current.pollution.aqius || 0;

    const [cnInfo] = cnLevelsOfHealthConcern.filter(item => {
      const [min, max] = item.aqiRange;
      return between(currentAqiUs, min, max);
    }, []);
    return cnInfo;
  }, [data?.data]);

  return (
    <>
      <Container className='d-flex justify-content-center mb-4'>
        <Row>
          <h2>Pollution</h2>
        </Row>
      </Container>
      {usPollutionInfo && (
        <Container className='d-flex justify-content-center mb-4'>
          <Row className={'text-center'}>
            <h4 style={{ color: usPollutionInfo.color }}>
              Current PM2.5 Concentration basing on{' '}
              <strong>
                <em>US Air Quality Index</em>
              </strong>
              indicates that air conditions are{' '}
              <span className={'display-5 fw-bolder'}>
                {usPollutionInfo.info}
              </span>
            </h4>
          </Row>
        </Container>
      )}
      {cnPollutionInfo && (
        <Container className='d-flex justify-content-center mb-4'>
          <Row className={'text-center'}>
            <h4 style={{ color: cnPollutionInfo.color }}>
              Current PM2.5 Concentration basing on{' '}
              <strong>
                <em>China Air Quality Index</em>
              </strong>
              indicates that air conditions are{' '}
              <span className={'display-5 fw-bolder'}>
                {cnPollutionInfo.info}
              </span>
            </h4>
          </Row>
        </Container>
      )}
      <Container>
        <Row className='d-flex justify-content-center mb-4'>
          <Col sm={12} md={8} xl={6}>
            {listValues}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Pollution;
