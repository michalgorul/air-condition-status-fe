import React, { FormEvent, useCallback, useState } from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Geolocation from 'src/atoms/geolocation/Geolocation';
import getCityDataCoordinates from 'src/api/iqAir/getCityDataCoordinates';
import { useNavigate } from 'react-router-dom';

interface Props {
  onChange?: () => void;
  onSubmit?: () => void;
}

export interface Coordinates {
  latitude?: number;
  longitude?: number;
}

const LocationInput: React.FC<Props> = props => {
  const navigate = useNavigate();
  const [location, setLocation] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [blur, setBlur] = useState<boolean>(false);

  const handleGetCoordinates = useCallback((coords: Coordinates) => {
    setLocation(`${coords.latitude}, ${coords.longitude}`);
  }, []);

  const handleChange = useCallback((event: FormEvent) => {
    event.preventDefault();
    const { value } = event.target as HTMLInputElement;

    setLocation(value);
  }, []);

  const validate = useCallback(() => {
    if (!location) {
      setError('Input is required');
      return;
    }
    const regExpMatchArray = location.match(
      '^[-+]?([1-8]?\\d(\\.\\d+)?|90(\\.0+)?),\\s*[-+]?(180(\\.0+)?|((1[0-7]\\d)|([1-9]?\\d))(\\.\\d+)?)$'
    );
    if (!regExpMatchArray) {
      setError('Latitude and longitude must be entered separated by coma');
    } else setError('');
  }, [location]);

  const handleSubmit = useCallback(
    (event: FormEvent) => {
      validate();
      event.preventDefault();
      if (error) return;
      const [lat, lon] = location.split(',');
      getCityDataCoordinates(lat.trim(), lon.trim())
        .then(weatherData => {
          console.log(weatherData);
          return weatherData;
        })
        .then(weatherData =>
          navigate(
            `/cities/${weatherData.data.data.country}/${weatherData.data.data.state}/${weatherData.data.data.city}`,
            { state: weatherData }
          )
        );
    },
    [error, location, navigate, validate]
  );

  const handleBlur = useCallback(() => {
    setBlur(true);
    validate();
  }, [validate]);

  const handleFocus = useCallback(() => {
    setBlur(false);
  }, []);

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Container className='d-flex justify-content-center mt-5'>
          <FloatingLabel
            controlId='floatingInput'
            label='Location'
            className='mb-1'
          >
            <Form.Control
              size={'lg'}
              type='text'
              value={location}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            <Form.Text className='text-muted'>Enter coordinates</Form.Text>
          </FloatingLabel>
        </Container>
        {error && blur ? (
          <Container className='d-flex justify-content-center text-danger'>
            {error}
          </Container>
        ) : null}
        <Geolocation handleGetCoordinates={handleGetCoordinates} />
        <Container className={'d-flex justify-content-center'}>
          <Button className={'btn-lg'} variant='primary' type='submit'>
            Submit
          </Button>
        </Container>
      </Form>
    </>
  );
};

export default LocationInput;
