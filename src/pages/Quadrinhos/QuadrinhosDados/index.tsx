import React, { useEffect, useState } from 'react';
import { BsHeartFill, BsHeart } from 'react-icons/bs';
import { useParams } from 'react-router';
import { Button, Col, Form, ListGroup, ListGroupItem, Row } from 'reactstrap';
// import api_marvel_teste from '../../../services/api_marvel_teste';
import apiTeste2 from '../../../services/api_teste/api_teste_2';

interface DataMarvelProps {
  title: string;
  description: string;
  thumbmail: {
    path: string;
    extension: string;
  };
}

interface QuadrinhosDadosParamsProps {
  id: string;
}

const dadosIniciais = {
  title: '',
  description: '',
  thumbmail: {
    extension: '',
    path: ''
  }
};
export default function QuadrinhosDados() {
  const [dataMarvel, setDataMarvel] = useState<DataMarvelProps>(dadosIniciais);
  const [favoritar, setFavoritar] = useState<boolean>(false);
  
  const { id } = useParams<QuadrinhosDadosParamsProps>();

  useEffect(() => {
    let resultado = apiTeste2.find((item) => {
      if (item.id === id) {
        setDataMarvel({
          title: item.title,
          description: item.description,
          thumbmail: {
            extension: item.thumbmail.extension,
            path: item.thumbmail.path
          }
        })
      }
      return '';
    });
    console.log(resultado);
  }, [id]);

  // useEffect(() => {
  //   api_marvel_teste.get(`quadrinho/${id}`)
  //   .then((item) => {
  //     setDataMarvel({
  //       title: item.data.title,
  //       description: item.data.description,
  //       thumbmail: {
  //         path: item.data.path,
  //         extension: item.data.extension,
  //       }
  //     })
  //   });
  // }, [id]);

  async function handleSubmit() {
    setFavoritar(!favoritar);
  }

  return (
    <Row>
      <Col md={12}>
        <h1>Dados do Quadrinho</h1>
      </Col>
      <Col md={12}>
        <ListGroup>
          <ListGroupItem>{dataMarvel.title}</ListGroupItem>
          <ListGroupItem>
            <img src={`${dataMarvel.thumbmail.path}.${dataMarvel.thumbmail.extension}`} alt={dataMarvel.title} width={200}  />
          </ListGroupItem>
          <ListGroupItem>{dataMarvel.description}</ListGroupItem>
          <ListGroupItem>
            <Form>
              <Button
                color="primary"
                placeholder="Favoritar"
                type="button"
                onClick={handleSubmit}
              >
                {(favoritar) ? (
                  <BsHeartFill size={40}/>
                ) : (
                  <BsHeart size={40}/>
                )}
              </Button>
            </Form>
          </ListGroupItem>
        </ListGroup>
      </Col>
    </Row>
  );
}