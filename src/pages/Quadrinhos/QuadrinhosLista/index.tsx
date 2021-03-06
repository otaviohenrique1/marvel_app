import React, { useEffect, useState } from 'react';
import { Col, Row, Table } from 'reactstrap';
import ResponseData from "./ResponseData";
import apiTeste from "../../../services/api_teste/api_teste_2";
import { Item } from '../../../components/Item';

export default function QuadrinhosLista() {
  const [dataMarvel, setDataMarvel] = useState<ResponseData[]>([]);

  useEffect(() => {
    setDataMarvel(apiTeste);
  }, [dataMarvel]);

  return (
    <Row>
      <Col md={12} className="mt-5 mb-5">
        <h1>Quadrinhos</h1>
      </Col>
      <Col md={12}>
        <Table striped>
          <thead>
            <tr>
              <th>Imagem</th>
              <th>Titulo</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {(dataMarvel.length !== 0) ? 
                dataMarvel.map((comics: ResponseData) => {
                  return (
                    <Item
                      key={comics.id}
                      id={comics.id}
                      name={comics.title}
                      image={`${comics.thumbmail.path}`}
                      to={`/quadrinhos/${comics.id}`}
                    />
                  );
                }
              ) : (
              <tr>
                <td colSpan={4}>Lista vazia</td>
              </tr>
              )
            }
          </tbody>
        </Table>
      </Col>
    </Row>
  );
}

/*
  <tr key={comics.id}>
    <td>
      <img
        src={`${comics.thumbmail.path}`} alt={comics.title}
        // className="imagem-personagem"
        width={50}
      />
    </td>
    <td>{comics.title}</td>
    <td>
      <Link to={`/quadrinhos/${comics.id}`}>
        <Button color="primary">Exibir</Button>
      </Link>
    </td>
  </tr>
*/