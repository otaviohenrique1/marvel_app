import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import { Col, Row, Table } from 'reactstrap';
// import api_marvel from '../../../services/api_marvel';
import "../../../styles/scss/personagem/style.scss";
import ResponseData from './ResponseData';
import { Item } from '../../../components/Item';

import apiTeste from "../../../services/api_teste/api_teste";
// import api from '../../../services/api_marvel_teste';

export default function PersonagensLista() {
  const [dataMarvel, setDataMarvel] = useState<ResponseData[]>([]);

  // useEffect(() => {
  //   api_marvel.get(`characters`)
  //     .then(
  //       (response) => {
  //         setDataMarvel(response.data.data.results);
  //         // console.log(dataMarvel);
  //         console.log(response.data.data.results);
  //         console.log(response.data.data.results.thumbnail.path);
  //       }
  //     )
  //     .catch((error) => console.log(error));
  // }, [dataMarvel]);

  // useEffect(() => {
  //   api.get('personagens')
  //   .then((item) => {
  //     setDataMarvel(item.data);
  //   });
  // }, []);

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
              <th></th>
            </tr>
          </thead>
          <tbody>
            {(dataMarvel) ? 
              dataMarvel.map((character: ResponseData) => {
                return (
                  <Item
                    key={character.id}
                    id={character.id}
                    name={character.name}
                    image={`${character.thumbmail.path}.${character.thumbmail.extension}`}
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