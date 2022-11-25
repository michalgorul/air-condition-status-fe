import { Col, Row, Table } from 'react-bootstrap';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { WeatherHistory } from 'src/types/types';
import HomeButton from 'src/atoms/homeButton/HomeButton';
import Title from 'src/atoms/title/Title';
import Container from 'react-bootstrap/Container';
import getAllHistory from 'src/api/weatherHistory/getAllHistory';
import {
  getCnColor,
  getUsColor,
} from 'src/components/pollution/levelsOfHealthConcernUs';
import { ArrowDownShort, ArrowUpShort, Trash } from 'react-bootstrap-icons';
import deleteHistoryEntry from 'src/api/weatherHistory/deleteHistoryEntry';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import {
  dismissToasts,
  loadingToast,
  showErrorToast,
  showSuccessToast,
} from 'src/utils/toast';
import { AxiosError } from 'axios';

type TableOptions = Map<string, 'ASC' | 'DESC' | undefined>;

const initValues: [string, 'ASC' | 'DESC' | undefined][] = [
  ['timestamp', undefined],
  ['city', undefined],
  ['state', undefined],
  ['country', undefined],
  ['latitude', undefined],
  ['longitude', undefined],
  ['temperature', undefined],
  ['pressure', undefined],
  ['humidity', undefined],
  ['aqius', undefined],
  ['aqicn', undefined],
];

const initState: TableOptions = new Map(initValues);

interface Props {}

const History: React.FC<Props> = () => {
  const [historyData, setHistoryData] = useState<WeatherHistory[]>();
  const [sort, setSort] = useState(0);
  const [options] = useState<TableOptions>(initState);

  useEffect(() => {
    if (historyData) return;
    getAllHistory()
      .then(r => {
        setHistoryData(r.data);
        return r.data;
      })
      .catch((error: AxiosError) => {
        console.log(error);
        dismissToasts();
        showErrorToast(error.message);
      });
  }, [historyData]);

  const deleteRow = useCallback(
    (id: string) => {
      loadingToast();
      deleteHistoryEntry(id)
        .then(response => {
          if (response.status === 200 && response.data === 'success') {
            const filteredArray = historyData?.filter(i => i.id !== id);
            setHistoryData(filteredArray);
            dismissToasts();
            showSuccessToast();
          }
        })
        .catch(error => {
          console.error(error);
          dismissToasts();
          showErrorToast('History entry was not deleted');
        });
    },
    [historyData]
  );

  const sortBy = useCallback(
    (key: keyof WeatherHistory) => {
      const option = options.get(key);
      const order = option === 'DESC' || !option ? [1, -1] : [-1, 1];
      const sorted = historyData?.sort((a, b) =>
        a[key] < b[key] ? order[0] : order[1]
      );
      setHistoryData(sorted);
      setSort(sort + 1);
      initValues.forEach(i => options.set(i[0], i[1]));
      if (option === 'DESC' || !option) options.set(key, 'ASC');
      else options.set(key, 'DESC');
    },
    [historyData, options, sort]
  );

  const showArrow = useCallback(
    (key: keyof WeatherHistory) => {
      const option = options.get(key);
      if (!option) return <></>;
      return option === 'ASC' ? (
        <ArrowDownShort className={'ms-1'} />
      ) : (
        <ArrowUpShort className={'ms-1'} />
      );
    },
    [options]
  );

  const fillRows = useMemo(() => {
    if (!historyData) return;
    return historyData.map(h => {
      return (
        <>
          <tr className={'text-center'}>
            <td>{new Date(h.timestamp).toLocaleDateString()}</td>
            <td>{new Date(h.timestamp).toLocaleTimeString()}</td>
            <td>{h.country}</td>
            <td>{h.city}</td>
            <td>{h.temperature + ' °C'}</td>
            <td>{h.pressure + ' hPa'}</td>
            <td>{h.humidity + '%'}</td>
            <td style={{ color: getUsColor(h.aqius) }}>{h.aqius}</td>
            <td style={{ color: getCnColor(h.aqicn) }}>{h.aqicn}</td>
            <td>
              <Trash role={'button'} onClick={() => deleteRow(h.id)} />
            </td>
          </tr>
        </>
      );
    });
  }, [deleteRow, historyData, sort]);

  const showTable = useCallback(() => {
    return (
      <>
        <Table striped bordered hover>
          <thead>
            <tr className={'text-center'}>
              <th role={'button'} onClick={() => sortBy('timestamp')}>
                Date
                {showArrow('timestamp')}
              </th>
              <th role={'button'} onClick={() => sortBy('timestamp')}>
                Time
                {showArrow('timestamp')}
              </th>
              <th role={'button'} onClick={() => sortBy('country')}>
                Country
                {showArrow('country')}
              </th>
              <th role={'button'} onClick={() => sortBy('city')}>
                City
                {showArrow('city')}
              </th>
              <th role={'button'} onClick={() => sortBy('temperature')}>
                Temperature
                {showArrow('temperature')}
              </th>
              <th role={'button'} onClick={() => sortBy('pressure')}>
                Pressure
                {showArrow('pressure')}
              </th>
              <th role={'button'} onClick={() => sortBy('humidity')}>
                Humidity
                {showArrow('humidity')}
              </th>
              <th role={'button'} onClick={() => sortBy('aqius')}>
                AQI US
                {showArrow('aqius')}
              </th>
              <th role={'button'} onClick={() => sortBy('aqicn')}>
                AQI China
                {showArrow('aqicn')}
              </th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>{fillRows}</tbody>
        </Table>
      </>
    );
  }, [fillRows, showArrow, sortBy]);

  return (
    <>
      <ToastContainer />
      <HomeButton />
      <Title title={'Requests history'} />
      <Container>
        <Row className='d-flex justify-content-center mb-4'>
          <Col sm={12}>{showTable()}</Col>
        </Row>
      </Container>
    </>
  );
};

export default History;
