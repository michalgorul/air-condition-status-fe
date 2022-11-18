import React from 'react';
import Container from 'react-bootstrap/Container';

interface Props {
  title: string;
}

const Title: React.FC<Props> = props => {
  const { title } = props;
  return (
    <Container className='d-flex justify-content-center text-center mb-5 mt-5'>
      <h1 className='display-1 fw-bold'>{title}</h1>
    </Container>
  );
};

export default Title;
