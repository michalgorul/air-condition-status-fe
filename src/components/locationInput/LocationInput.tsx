import React, { FormEvent, useCallback, useState } from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import getGeocoding from 'src/api/ninjasGeocoding/getGeocoding';
import Geolocation from 'src/atoms/geolocation/Geolocation';
import getCityDataCoordinates from 'src/api/iqAir/getCityDataCoordinates';
import { useNavigate } from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';

interface Props {
  onChange?: () => void;
  onSubmit?: () => void;
}

export interface Coordinates {
  latitude?: number;
  longitude?: number;
}

const LocationInput: React.FC<Props> = () => {
  const navigate = useNavigate();
  const [location, setLocation] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [blur, setBlur] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleGetCoordinates = useCallback((coords: Coordinates) => {
    setLocation(`${coords.latitude}, ${coords.longitude}`);
    setError('');
  }, []);

  const handleChange = useCallback((event: FormEvent) => {
    event.preventDefault();
    const { value } = event.target as HTMLInputElement;

    setLocation(value);
  }, []);

  const inputIsCoords = useCallback(() => location.match(/^\d/), [location]);

  const validate = useCallback(() => {
    if (!location) {
      setError('Input is required');
      return;
    }
    const regExpMatchArrayCoords = location.match(
      '^[-+]?([1-8]?\\d(\\.\\d+)?|90(\\.0+)?),\\s*[-+]?(180(\\.0+)?|((1[0-7]\\d)|([1-9]?\\d))(\\.\\d+)?)$'
    );
    const regExpMatchArrayCity = location.match(
      '^[a-zA-Z]+(?:[\\s-][a-zA-Z]+)*$|([A-Za-z]+(?: [A-Za-z]+)*),? ([A-Za-z]*)'
    );
    if (inputIsCoords()) {
      if (!regExpMatchArrayCoords) {
        setError('Latitude and longitude must be entered separated by coma');
      }
    } else if (!regExpMatchArrayCity) {
      setError('Enter proper city name');
    } else setError('');
  }, [inputIsCoords, location]);

  const showErrorToast = useCallback(() => {
    toast.error('City not found', {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });
  }, []);

  const getCityDataCoordinatesCallback = useCallback(
    (lat: string, lon: string) => {
      toast.loading('Please wait...');
      getCityDataCoordinates(lat.trim(), lon.trim())
        .then(response => {
          setLoading(false);
          navigate(
            `/cities/${response.data.data.country}/${response.data.data.state}/${response.data.data.city}`,
            { state: { weather: response.data } }
          );
        })
        .catch(error => {
          console.log(error);
          setLoading(false);
          showErrorToast();
        });
    },
    [navigate, showErrorToast]
  );

  const handleSubmit = useCallback(
    (event: FormEvent) => {
      validate();
      event.preventDefault();
      if (error || !location) return;
      if (inputIsCoords()) {
        const [lat, lon] = location.split(',');
        setLoading(true);
        getCityDataCoordinatesCallback(lat, lon);
      } else {
        setLoading(true);
        const [city, country] = location.split(',');
        getGeocoding(city, country)
          .then(response => {
            const lat = response.data.latitude;
            const lon = response.data.longitude;
            getCityDataCoordinatesCallback(lat, lon);
          })
          .catch(error => {
            console.log(error);
            setLoading(false);
            showErrorToast();
          });
      }
    },
    [
      error,
      getCityDataCoordinatesCallback,
      inputIsCoords,
      location,
      showErrorToast,
      validate,
    ]
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
      <ToastContainer />
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
            <Form.Text className='text-muted'>
              Enter coordinates or city and country separated by comma
            </Form.Text>
          </FloatingLabel>
        </Container>
        {error && blur ? (
          <Container className='d-flex justify-content-center text-danger'>
            {error}
          </Container>
        ) : null}
        <Geolocation handleGetCoordinates={handleGetCoordinates} />
        <Container className={'d-flex justify-content-center'}>
          <Button
            className={'btn-lg'}
            variant='primary'
            type='submit'
            disabled={loading}
          >
            Submit
          </Button>
        </Container>
      </Form>
    </>
  );
};

export default LocationInput;
