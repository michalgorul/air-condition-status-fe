import React from 'react';
import Container from 'react-bootstrap/Container';

interface Props {}

const MainIndicator: React.FC<Props> = () => {
  return (
    <Container className='p-5 mb-4'>
      <h1 className='display-1 fw-bold'>Air Conditions and Forecast</h1>
    </Container>
  );
};

export default MainIndicator;
