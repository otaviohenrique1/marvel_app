import React, { useEffect, useState } from 'react';
import { BsHeartFill, BsHeart } from 'react-icons/bs';
import { useParams } from 'react-router';
import { Button, Form, ListGroup, ListGroupItem, Row } from 'reactstrap';
import apiTeste from '../../../services/api_teste/api_teste_2';

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
    let resultado = apiTeste.find((item) => {
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

  return (
    <Row>
      <ListGroup>
        <ListGroupItem>{dataMarvel.title}</ListGroupItem>
        <ListGroupItem>
          <img src={dataMarvel.thumbmail.path} alt={dataMarvel.title} width={200}  />
        </ListGroupItem>
        <ListGroupItem>{dataMarvel.description}</ListGroupItem>
        <ListGroupItem>
          <Form>
            <Button
              color="primary"
              placeholder="Favoritar"
              type="button"
              onClick={() => setFavoritar(!favoritar)}
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
    </Row>
  );
}