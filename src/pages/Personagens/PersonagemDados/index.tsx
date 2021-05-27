import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { ListGroup, ListGroupItem, Row } from 'reactstrap';
import apiTeste from '../../../services/api_teste/api_teste';

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

export default function PersonagemDados() {
  const [dataMarvel, setDataMarvel] = useState<DataMarvelProps>({
    name: '',
    description: '',
    thumbmail: {
      extension: '',
      path: ''
    }
  });
  
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
      </ListGroup>
    </Row>
  );
}