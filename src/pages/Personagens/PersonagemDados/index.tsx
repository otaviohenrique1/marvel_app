import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Button, Form, ListGroup, ListGroupItem, Row } from 'reactstrap';
import apiTeste from '../../../services/api_teste/api_teste';
import { BsHeartFill, BsHeart } from "react-icons/bs";

interface DataMarvelProps {
  name: string;
  description: string;
  thumbmail: {
    path: string;
    extension: string;
  };
}

interface PersonagemDadosParamsProps {
  id: string;
}

const dadosIniciais = {
  name: '',
  description: '',
  thumbmail: {
    extension: '',
    path: ''
  }
};
export default function PersonagemDados() {
  const [dataMarvel, setDataMarvel] = useState<DataMarvelProps>(dadosIniciais);
  const [favoritar, setFavoritar] = useState<boolean>(false);
  
  const { id } = useParams<PersonagemDadosParamsProps>();

  useEffect(() => {
    let resultado = apiTeste.find((item) => {
      if (item.id === id) {
        setDataMarvel({
          name: item.name,
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
        <ListGroupItem>{dataMarvel.name}</ListGroupItem>
        <ListGroupItem>
          <img src={dataMarvel.thumbmail.path} alt={dataMarvel.name} width={200}  />
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