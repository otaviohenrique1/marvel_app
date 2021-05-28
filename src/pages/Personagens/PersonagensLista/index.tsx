import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import { Col, Row, Table } from 'reactstrap';
// import api from '../../services/api';
import "../../../styles/scss/personagem/style.scss";
import ResponseData from './ResponseData';
import { Item } from '../../../components/Item';

import apiTeste from "../../../services/api_teste/api_teste";

export default function PersonagensLista() {
  const [dataMarvel, setDataMarvel] = useState<ResponseData[]>([]);

  // useEffect(() => {
  //   api.get(`/characters`)
  //     .then(
  //       (response) => {
  //         setDataMarvel(response.data.data.results);
  //         console.log(dataMarvel);
  //       }
  //     )
  //     .catch((error) => console.log(error));
  // }, [dataMarvel]);

  useEffect(() => {
    setDataMarvel(apiTeste);
  }, [dataMarvel]);

  return (
    <Row>
      <Col md={12} className="mt-5 mb-5">
        <h1>Personagens</h1>
      </Col>
      <Col md={12}>
        <Table striped>
          <thead>
            <tr>
              <th>Imagem</th>
              <th>Nome</th>
              <th>Descricao</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {(dataMarvel.length !== 0) ? 
              dataMarvel.map((character: ResponseData) => {
                return (
                  <Item
                    id={character.id}
                    name={character.name}
                    image={`${character.thumbmail.path}`}
                    to={`/personagens/${character.id}`}
                  />
                );
              }) : (
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
  <tr key={character.id}>
    <td>
      <img
        src={`${character.thumbmail.path}`} alt={character.name}
        width={50}
      />
    </td>
    <td>{character.name}</td>
    <td>
      <Link to={`/personagens/${character.id}`}>
        <Button color="primary">Exibir</Button>
      </Link>
    </td>
  </tr>
*/