import React, { useCallback, useMemo } from 'react';
import Container from 'react-bootstrap/Container';
import { DailyUnits, ForecastResponse } from 'src/types/types';
import { Col, Row, Table } from 'react-bootstrap';

const lodash = require('lodash');

interface Props {
  data?: ForecastResponse;
}

const Forecast: React.FC<Props> = props => {
  const { data } = props;

  const fillRow = useCallback(
    (list?: string[] | number[], unit?: string, date?: boolean) => {
      if (!list) return;
      if (!date)
        return list.map(item => {
          return (
            <td className={'text-center'}>
              {item} {unit}
            </td>
          );
        });
      return list.map(item => {
        return (
          <td className={'text-center'}>
            {new Date(item).toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
            })}
          </td>
        );
      });
    },
    []
  );

  const fillRows = useCallback(() => {
    if (!data) return;
    return Object.entries(data?.daily).map(([key, value]) => {
      if (key === 'time' || key === 'weathercode') return <></>;
      if (key === 'sunrise' || key === 'sunset')
        return (
          <tr>
            <td>{lodash.startCase(key)}</td>
            {fillRow(
              value,
              data.dailyUnits[key as keyof DailyUnits],
              true
            )}{' '}
          </tr>
        );
      else {
        return (
          <tr>
            <td>{lodash.startCase(key)}</td>
            {fillRow(value, data.dailyUnits[key as keyof DailyUnits])}{' '}
          </tr>
        );
      }
    });
  }, [data, fillRow]);

  const headers = useMemo(() => {
    if (data?.daily.time)
      return data?.daily.time.map(time => {
        return (
          <th className={'text-center'}>
            {new Date(time).toLocaleDateString('en-us', {
              month: 'short',
              day: 'numeric',
            })}
          </th>
        );
      });
  }, [data?.daily.time]);

  const listValues = useMemo(() => {
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th className={'text-center'}>Description</th>
            {headers}
          </tr>
        </thead>
        <tbody>{fillRows()}</tbody>
      </Table>
    );
  }, [fillRows, headers]);

  return (
    <>
      <Container className='d-flex justify-content-center mb-4'>
        <Row>
          <h2>Forecast</h2>
        </Row>
      </Container>
      <Container>
        <Row className='d-flex justify-content-center mb-4'>
          <Col sm={12} md={8}>
            {listValues}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Forecast;
