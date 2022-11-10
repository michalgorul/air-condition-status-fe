import React, { FormEvent, useCallback, useState } from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

interface Props {
  onChange?: () => void;
  onSubmit?: () => void;
}

const LocationInput: React.FC<Props> = props => {
  const [location, setLocation] = useState<string>('');
  const [toShow, setToShow] = useState<string>('');

  const handleChange = useCallback((event: FormEvent) => {
    event.preventDefault();
    const { value } = event.target as HTMLInputElement;

    setLocation(value);
  }, []);

  const handleSubmit = useCallback(
    (event: FormEvent) => {
      event.preventDefault();
      setToShow(location);
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
            <Form.Text className='text-muted'>
              Enter here coordinates or city name
            </Form.Text>
          </FloatingLabel>
        </Container>
        <Container className={'d-flex justify-content-center'}>
          <Button variant='primary' type='submit'>
            Submit
          </Button>
        </Container>
      </Form>
      <div className='d-flex justify-content-center mt-3 fw-bold display-6'>
        {toShow}
      </div>
    </>
  );
};

export default LocationInput;
