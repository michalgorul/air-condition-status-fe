import React, { ReactNode } from 'react';
import { Button, Container, NavLink } from 'react-bootstrap';

interface Props {
  children?: ReactNode;
}

const HomeButton: React.FC<Props> = props => {
  const { children } = props;
  return (
    <Container className='d-flex justify-content-end mt-4 me-0'>
      <NavLink href={'/'}>
        <Button className={'btn-sm'}>Home</Button>
      </NavLink>
      {children}
    </Container>
  );
};

export default HomeButton;
