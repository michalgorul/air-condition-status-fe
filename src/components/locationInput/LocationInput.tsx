import React, { FormEvent, useCallback, useState } from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Geolocation from 'src/atoms/geolocation/Geolocation';

interface Props {
  onChange?: () => void;
  onSubmit?: () => void;
}

export interface Coordinates {
  latitude?: number;
  longitude?: number;
}

const LocationInput: React.FC<Props> = props => {
  const [location, setLocation] = useState<string>('');
  const [coordinates, setCoordinates] = useState<Coordinates>({});
  const [error, setError] = useState<string>('');
  const handleGetCoordinates = useCallback(
    (coords: Coordinates) => {
      setCoordinates({
        latitude: coords.latitude,
        longitude: coords.longitude,
      });
      setLocation(`${coordinates.latitude}, ${coordinates.longitude}`);
    },
    [coordinates]
  );

  const handleChange = useCallback((event: FormEvent) => {
    event.preventDefault();
    const { value } = event.target as HTMLInputElement;

    setLocation(value);
  }, []);

  const validate = useCallback(() => {
    if (!location) {
      setError('Required');
    } else if (location.length > 15) {
      setError('Must be 15 characters or less');
    } else setError('');
    return error;
  }, [error, location]);

  const handleSubmit = useCallback(
    (event: FormEvent) => {
      event.preventDefault();
      validate();
      console.log(location);
    },
    [location, validate]
  );
  //TODO: add onBlur and onFocus functions to make proper handling of displaying errors
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Container className='d-flex justify-content-center mt-5'>
          <FloatingLabel
            controlId='floatingInput'
            label='Location'
            className='mb-3'
          >
            <Form.Control
              size={'lg'}
              type='text'
              value={location}
              onChange={handleChange}
            />
            <Form.Text className='text-muted'>Enter coordinates</Form.Text>
          </FloatingLabel>
        </Container>
        {error ? (
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
