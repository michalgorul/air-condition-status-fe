import React, { useCallback } from 'react';
import { Button, Container, NavLink, Row, Table } from 'react-bootstrap';
import { CitiesCategorized } from 'src/types/types';

interface Props {
  visible: boolean;
  cities?: CitiesCategorized;
}

const CitiesTable: React.FC<Props> = props => {
  const { cities, visible } = props;
  const itemsToDisplay = useCallback(() => {
    return cities?.cities.map((city, index) => {
      let href = `/cities/${cities?.country}/${city.state}/${city.city}`;
      return (
        <tr>
          <td>
            <NavLink href={href}>{index}</NavLink>
          </td>
          <td>
            <NavLink href={href}>{city.city}</NavLink>
          </td>
          <td>
            <NavLink href={href}>{city.state}</NavLink>
          </td>
          <td>
            <NavLink href={href}>{cities?.country}</NavLink>
          </td>
        </tr>
      );
    });
  }, [cities]);

  return (
    <Container className={'mb-5'}>
      <Row xs='auto' className={'justify-content-center ms-2 mb-2'}>
        {visible && (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>City</th>
                <th>State</th>
                <th>Country</th>
              </tr>
            </thead>
            <tbody>{itemsToDisplay()}</tbody>
          </Table>
        )}
      </Row>
      <Row xs='auto' className={'justify-content-center'}>
        <Button onClick={() => window.scrollTo(0, 0)}>To top</Button>
      </Row>
    </Container>
  );
};

export default CitiesTable;
