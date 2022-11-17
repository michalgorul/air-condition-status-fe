import React from 'react';
import Title from 'src/atoms/title/Title';
import LocationInput from 'src/components/locationInput/LocationInput';
import { Button, Container, NavLink } from 'react-bootstrap';

interface Props {}

const MainDisplay: React.FC<Props> = () => {
  return (
    <>
      <Container className='d-flex justify-content-end mt-4 me-0'>
        <NavLink href={'/cities'}>
          <Button className={'btn-sm'}>Available Cities</Button>
        </NavLink>
      </Container>
      <Title title={'Air Condition Status'} />
      <LocationInput />
    </>
  );
};

export default MainDisplay;
