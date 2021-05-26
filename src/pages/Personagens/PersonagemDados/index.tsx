import React, { useState } from 'react';
import { ListGroup, ListGroupItem, Row } from 'reactstrap';
import ResponseData from '../PersonagensLista/ResponseData';


export default function PersonagemDados() {
  const [dataMarvel, setDataMarvel] = useState<ResponseData>({
    id: '',
    name: '',
    description: '',
    thumbmail: {
      path:'',
      extension: ''
    }
  });
  
  return (
    <Row>
      <ListGroup>
        <ListGroupItem></ListGroupItem>
        <ListGroupItem></ListGroupItem>
        <ListGroupItem></ListGroupItem>
      </ListGroup>
    </Row>
  );
}