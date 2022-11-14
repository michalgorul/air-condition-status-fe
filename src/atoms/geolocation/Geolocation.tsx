import React, { useCallback } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

import { useGeolocated } from 'react-geolocated';
import { Coordinates } from 'src/components/locationInput/LocationInput';

interface Props {
  handleGetCoordinates?: (coordinates: Coordinates) => void;
}

const Geolocation: React.FC<Props> = props => {
  const { handleGetCoordinates } = props;
  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: true,
      },
      userDecisionTimeout: 5000,
    });
  const getCoordinates = useCallback(() => {
    if (handleGetCoordinates && coords) {
      handleGetCoordinates(coords);
    }
  }, [coords, handleGetCoordinates]);

  return !isGeolocationAvailable ? (
    <Container className={'d-flex justify-content-center mb-4'}>
      Your browser does not support Geolocation
    </Container>
  ) : !isGeolocationEnabled ? (
    <Container className={'d-flex justify-content-center mb-3'}>
      Geolocation is not enabled
    </Container>
  ) : coords ? (
    <>
      <Container className={'d-flex justify-content-center mb-1'}>OR</Container>

      <Container className={'d-flex justify-content-center mb-3'}>
        <Button variant='primary rounded-pill' onClick={getCoordinates}>
          Get location from browser
        </Button>
      </Container>
    </>
  ) : (
    <Container className={'d-flex justify-content-center mb-4'}>
      Getting the location data
    </Container>
  );
};

export default Geolocation;
