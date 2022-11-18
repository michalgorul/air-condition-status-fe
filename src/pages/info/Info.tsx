import { Col, Row, Table } from 'react-bootstrap';
import React, { useMemo } from 'react';
import Container from 'react-bootstrap/Container';
import HomeButton from 'src/atoms/homeButton/HomeButton';
import Title from 'src/atoms/title/Title';

const Info = () => {
  const displayUSTable = useMemo(
    () => (
      <Table striped bordered hover>
        <tbody>
          <tr>
            <th>
              <strong className={'fs-5'}>Air Quality Index (AQI) Values</strong>
              <br />
              <br />
              <em>When the AQI is in this range</em>:
            </th>
            <th>
              <strong className={'fs-5'}>PM2.5 Concentration (μg/m3)</strong>
              <br />
              <br />
              <em>Fine particulate matter</em>:
            </th>
            <th>
              <strong className={'fs-5'}>Levels of Health Concern</strong>
              <br />
              <br />
              <em>...air quality conditions are:</em>
            </th>
            <th>
              <strong className={'fs-5'}>Colors</strong>
              <br />
              <br />
              <br />
              <em>...as symbolized by this color:</em>
            </th>
          </tr>
          <tr className={'bg-success'}>
            <td>
              <strong>0 - 50 </strong>
            </td>
            <td>
              <strong>0 – 12</strong>
            </td>
            <td>
              <strong>Good </strong>
            </td>
            <td>
              <strong>Green </strong>
            </td>
          </tr>
          <tr style={{ background: '#DAA520' }}>
            <td>
              <strong>51 - 100</strong>
            </td>
            <td>
              <strong> 12.1 – 35.4</strong>
            </td>
            <td>
              <strong>Moderate</strong>
            </td>
            <td>
              <strong>Yellow </strong>
            </td>
          </tr>
          <tr className={'bg-warning'}>
            <td>
              <strong>101-150 </strong>
            </td>
            <td>
              <strong>35.5 – 55.5 </strong>
            </td>
            <td>
              <strong>Unhealthy for Sensitive Groups</strong>
            </td>
            <td>
              <strong>Orange</strong>
            </td>
          </tr>
          <tr className={'bg-danger'}>
            <td>
              <strong>151 to 200</strong>
            </td>
            <td>
              <strong>55.6 – 150.4</strong>
            </td>
            <td>
              <strong>Unhealthy </strong>
            </td>
            <td>
              <strong>Red</strong>
            </td>
          </tr>
          <tr style={{ background: 'purple' }}>
            <td>
              <strong>201 to 300 </strong>
            </td>
            <td>
              <strong> 150.5 – 250.4</strong>
            </td>
            <td>
              <strong>Very Unhealthy</strong>
            </td>
            <td>
              <strong>Purple</strong>
            </td>
          </tr>
          <tr style={{ background: 'maroon' }}>
            <td>
              <strong>301 to 500</strong>
            </td>
            <td>
              <strong> 250.5 – 500</strong>
            </td>
            <td>
              <strong>Hazardous</strong>
            </td>
            <td>
              <strong>Maroon</strong>
            </td>
          </tr>
        </tbody>
      </Table>
    ),
    []
  );

  const displayChinaTable = useMemo(
    () => (
      <Table striped bordered hover>
        <tbody>
          <tr>
            <th>
              <strong className={'fs-5'}>Air Quality Index (AQI) Values</strong>
              <br />
              <br />
              <em>When the AQI is in this range</em>:
            </th>
            <th>
              <strong className={'fs-5'}>PM2.5 Concentration (μg/m3)</strong>
              <br />
              <br />
              <em>Fine particulate matter</em>:
            </th>
            <th>
              <strong className={'fs-5'}>Levels of Health Concern</strong>
              <br />
              <br />
              <em>...air quality conditions are:</em>
            </th>
            <th>
              <strong className={'fs-5'}>Colors</strong>
              <br />
              <br />
              <br />
              <em>...as symbolized by this color:</em>
            </th>
          </tr>
          <tr className={'bg-success'}>
            <td>
              <strong>0 - 50 </strong>
            </td>
            <td>
              <strong>0 – 35</strong>
            </td>
            <td>
              <strong>Excellent </strong>
            </td>
            <td>
              <strong>Green </strong>
            </td>
          </tr>
          <tr style={{ background: '#DAA520' }}>
            <td>
              <strong>51 - 100</strong>
            </td>
            <td>
              <strong>35 – 75</strong>
            </td>
            <td>
              <strong>Good</strong>
            </td>
            <td>
              <strong>Yellow </strong>
            </td>
          </tr>
          <tr className={'bg-warning'}>
            <td>
              <strong>101-150 </strong>
            </td>
            <td>
              <strong>75 – 115</strong>
            </td>
            <td>
              <strong>Lightly Polluted </strong>
            </td>
            <td>
              <strong>Orange</strong>
            </td>
          </tr>
          <tr className={'bg-danger'}>
            <td>
              <strong>151 to 200</strong>
            </td>
            <td>
              <strong>115 – 150</strong>
            </td>
            <td>
              <strong>Moderately Polluted </strong>
            </td>
            <td>
              <strong>Red</strong>
            </td>
          </tr>
          <tr style={{ background: 'purple' }}>
            <td>
              <strong>201 to 300 </strong>
            </td>
            <td>
              <strong>150 – 250</strong>
            </td>
            <td>
              <strong>Heavily Polluted </strong>
            </td>
            <td>
              <strong>Purple</strong>
            </td>
          </tr>
          <tr style={{ background: 'maroon' }}>
            <td>
              <strong>301 to 500</strong>
            </td>
            <td>
              <strong>250 – 500</strong>
            </td>
            <td>
              <strong>Severely Polluted </strong>
            </td>
            <td>
              <strong>Maroon</strong>
            </td>
          </tr>
        </tbody>
      </Table>
    ),
    []
  );

  const usText = useMemo(
    () => (
      <>
        <p className={'text-white'}>
          <strong>The AQI (Air Quality Index)</strong>
          <br />
          AirData uses the{' '}
          <a href='https://www.airnow.gov/aqi/aqi-basics/'>
            Air Quality Index (AQI)
          </a>{' '}
          in some of its reports and tables and to display data using the
          visualization tools. The AQI is an index for reporting daily air
          quality. It tells how clean or polluted the air is, and what
          associated health effects might be a concern, especially for
          ground-level ozone and particle pollution.
          <br />
          <br />
          Think of the AQI as a yardstick that runs from 0 to 500. The higher
          the AQI value, the greater the level of air pollution and the greater
          the health concern. For example, an AQI value of 50 represents good
          air quality with little potential to affect public health, while an
          AQI value over 300 represents hazardous air quality.
        </p>
        <p className={'text-white'}>
          An AQI value of 100 generally corresponds to the national air quality
          standard for the pollutant, which is the level EPA has set to protect
          public health. AQI values below 100 are generally thought of as
          satisfactory. When AQI values are above 100, air quality is considered
          to be unhealthy-at first for certain sensitive groups of people, then
          for everyone as AQI values get higher.
        </p>
      </>
    ),
    []
  );

  const chinaText = useMemo(
    () => (
      <>
        <div className={'text-white'}>
          <p>
            It is difficult to understand the measurements of the the six
            pollutants and how these values affect our health. In order to make
            it easier to comprehend, therefore, in 1968 the US Air Pollution
            Control Administration developed the first Air Quality Index, aka
            AQI.
          </p>
          <p>
            The US Air Quality Index translates each air pollutant concentration
            into scores from 0 to 500 and levels from 1-6 reflecting their
            impact on our health. The China air quality index follows this same
            format.
          </p>
          <p>
            Each level has a corresponding Description; the US AQI deteriorating
            from Good to Hazardous and the China air quality index deteriorating
            from Excellent to Severely Polluted.
          </p>
          <p>
            Each level has a color representation which is the same for both the
            US and China AQIs.
          </p>
          <p>
            Each level is further enhanced with a more detailed description of
            health effects and recommendations for preventative measures to be
            taken.
          </p>
          <p>
            The US tightened its AQI standard in late 2012 when it was
            determined that lower levels of exposure to the pollutants caused
            more serious health damage than{' '}
            <a
              href='https://www.epa.gov/pm-pollution'
              target='_blank'
              rel='noopener noreferrer'
            >
              previously thought.
            </a>
          </p>
          <p>
            The China AQI standard is less strict than the US standard for PM2.5
            concentrations within 150 ug/m3, but gives the same AQI value (200
            and above) when the PM 2.5 concentration exceeds 150 ug/m3.
          </p>
        </div>
      </>
    ),
    []
  );

  return (
    <>
      <HomeButton />
      <Title title={'US Air Quality Index'} />
      <Container>
        <Row className='d-flex justify-content-center mb-4'>
          <Col sm={12} md={8} xl={6}>
            {usText}
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className='d-flex justify-content-center mb-4'>
          <Col sm={12} md={8} xl={6}>
            {displayUSTable}
          </Col>
        </Row>
      </Container>

      <Title title={'China Air Quality Index'} />
      <Container>
        <Row className='d-flex justify-content-center mb-4'>
          <Col sm={12} md={8} xl={6}>
            {chinaText}
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className='d-flex justify-content-center mb-4'>
          <Col sm={12} md={8} xl={6}>
            {displayChinaTable}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Info;
