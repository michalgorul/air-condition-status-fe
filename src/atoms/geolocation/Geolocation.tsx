import React, { useCallback } from 'react';

import { useGeolocated } from 'react-geolocated';
import Container from 'react-bootstrap/Container';
import { Button } from 'react-bootstrap';

interface Props {
  handleGetCoordinates?: () => void;
}

const Geolocation: React.FC<Props> = props => {
  const { handleGetCoordinates } = props;
  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: false,
      },
      userDecisionTimeout: 5000,
    });
  const getCoordinates = useCallback(() => {
    if (handleGetCoordinates) {
      handleGetCoordinates();
    }
  }, [handleGetCoordinates]);

  return !isGeolocationAvailable ? (
    <div>Your browser does not support Geolocation</div>
  ) : !isGeolocationEnabled ? (
    <div>Geolocation is not enabled</div>
  ) : coords ? (
    <>
      <Container className={'d-flex justify-content-center'}>OR</Container>

      <Container className={'d-flex justify-content-center mb-4'}>
        <Button
          variant='primary rounded-pill'
          type='submit'
          onClick={getCoordinates}
        >
          Get location from browser
        </Button>
      </Container>
    </>
  ) : (
    <div>Getting the location data&hellip; </div>
  );
};

export default Geolocation;
