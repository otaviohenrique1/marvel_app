import React from 'react';
import { Col, Row, Table } from 'reactstrap';

export default function Favoritos() {
  return (
    <Row>
      <Col md={12} className="mt-5 mb-5">
        <h1>Favoritos</h1>
      </Col>
      <Col md={12}>
        <Table striped={true}>
          <thead>
            <th>Imagem</th>
            <th>Nome</th>
            <th>Categoria</th>
          </thead>
          <tbody>
          </tbody>
        </Table>
      </Col>
    </Row>
  );
}