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
import { Trash } from 'react-bootstrap-icons';
import deleteHistoryEntry from 'src/api/weatherHistory/deleteHistoryEntry';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
import { showErrorToast, showSuccessToast } from 'src/utils/toast';

interface Props {}

const History: React.FC<Props> = () => {
  const [historyData, setHistoryData] = useState<WeatherHistory[]>();

  useEffect(() => {
    if (historyData) return;
    getAllHistory()
      .then(r => setHistoryData(r.data))
      .catch(err => console.error(err));
  }, [historyData]);

  const deleteRow = useCallback(
    (id: string) => {
      toast.loading('Please wait...');
      deleteHistoryEntry(id)
        .then(response => {
          if (response.status === 200 && response.data === 'success') {
            const filteredArray = historyData?.filter(i => i.id !== id);
            setHistoryData(filteredArray);
            toast.dismiss();
            showSuccessToast();
          }
        })
        .catch(error => {
          console.error(error);
          toast.dismiss();
          showErrorToast('History entry was not deleted');
        });
    },
    [historyData]
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
  }, [deleteRow, historyData]);

  const showTable = useCallback(() => {
    return (
      <>
        <Table striped bordered hover>
          <thead>
            <tr className={'text-center'}>
              <th>Date</th>
              <th>Time</th>
              <th>Country</th>
              <th>City</th>
              <th>Temperature</th>
              <th>Pressure</th>
              <th>Humidity</th>
              <th>AQI US</th>
              <th>AQI China</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>{fillRows}</tbody>
        </Table>
      </>
    );
  }, [fillRows]);

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
