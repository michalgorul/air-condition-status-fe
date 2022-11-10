import React from 'react';
import Container from 'react-bootstrap/Container';

interface Props {}

const MainIndicator: React.FC<Props> = props => {
  return (
    <Container className='p-5 mb-4'>
      <h1 className='display-1 fw-bold'>Air Condition Status</h1>
    </Container>
  );
};

export default MainIndicator;
