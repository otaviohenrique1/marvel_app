import React from 'react';
import { ListGroup, ListGroupItem, Row } from 'reactstrap';

export default function QuadrinhosDados() {
  return (
    <Row>
      <h1>QuadrinhosDados</h1>
      <ListGroup>
        <ListGroupItem></ListGroupItem>
        <ListGroupItem>
          <img src='' alt='' width={200}  />
        </ListGroupItem>
        <ListGroupItem></ListGroupItem>
      </ListGroup>
    </Row>
  );
}