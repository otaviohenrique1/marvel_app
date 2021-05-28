import React, { useState, useEffect } from 'react';
import { Col, Row, Table } from 'reactstrap';
import api_teste_3 from '../../../services/api_teste/api_teste_3';

interface ResponseData {
  id: string;
  user_id: string;
  foreign_key: string;
  name: string;
  favorite: boolean;
  category: string;
  thumbmail: {
    path: string;
    extension: string;
  }
}

export default function Favoritos() {
  const [dataMarvel, setDataMarvel] = useState<ResponseData[]>([]);

  useEffect(() => {
    setDataMarvel(api_teste_3)
  }, [dataMarvel]);
  
  return (
    <Row>
      <Col md={12} className="mt-5 mb-5">
        <h1>Favoritos</h1>
      </Col>
      <Col md={12}>
        <Table striped>
          <thead>
            <th>Imagem</th>
            <th>Nome</th>
            <th>Categoria</th>
          </thead>
          <tbody>
            {(dataMarvel.length !== 0) ? 
              dataMarvel.map((favoritos: ResponseData) => {
                return (
                  <>
                    {(favoritos.favorite === true) && (
                      <tr key={favoritos.id}>
                        <td>
                          <img
                            src={favoritos.thumbmail.path} alt={favoritos.name}
                            width={50}
                          />
                        </td>
                        <td>{favoritos.name}</td>
                        <td>{favoritos.category}</td>
                      </tr>
                    )}
                  </>
                );
              }) : (
                <tr>
                  <td colSpan={3}>Lista vazia</td>
                </tr>
              )
            }
          </tbody>
        </Table>
      </Col>
    </Row>
  );
}
