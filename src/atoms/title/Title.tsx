import React from 'react';
import Container from 'react-bootstrap/Container';

interface Props {}

const Title: React.FC<Props> = props => {
  return (
    <Container className='d-flex justify-content-center mb-5 mt-5'>
      <h1 className='display-1 fw-bold'>Air Condition Status</h1>
    </Container>
  );
};

export default Title;
