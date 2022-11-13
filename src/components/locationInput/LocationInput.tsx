import React, { FormEvent, useCallback, useState } from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Geolocation from '../../atoms/geolocation/Geolocation';

interface Props {
  onChange?: () => void;
  onSubmit?: () => void;
}

// interface Coordinates {
//   latitude?: string;
//   longitude?: string;
// }

const LocationInput: React.FC<Props> = props => {
  const [location, setLocation] = useState<string>('');
  // const [coordinates, setCoordinates] = useState({});

  // const handleGetCoordinates = () => {};

  const handleChange = useCallback((event: FormEvent) => {
    event.preventDefault();
    const { value } = event.target as HTMLInputElement;

    setLocation(value);
  }, []);

  const handleSubmit = useCallback(
    (event: FormEvent) => {
      event.preventDefault();
      console.log(location);
    },
    [location]
  );

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
              placeholder='Warsaw'
              onChange={handleChange}
            />
            <Form.Text className='text-muted'>Enter here coordinates</Form.Text>
          </FloatingLabel>
        </Container>
        <Geolocation />
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
