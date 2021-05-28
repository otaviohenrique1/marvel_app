import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Row, ListGroup, ListGroupItem, Col } from 'reactstrap';
import apiTeste4 from '../../../services/api_teste/api_teste_4';

interface UsuarioDadosProps {
  id: string;
  name: string;
  email: string;
  senha: string;
}

interface QuadrinhosDadosParamsProps {
  id: string;
}

const dadosIniciais = {
  id: '',
  name: '',
  email: '',
  senha: ''
};

export default function UsuarioDados() {
  const [usuarioDados, setUsuarioDados] = useState<UsuarioDadosProps>(dadosIniciais);

  const { id } = useParams<QuadrinhosDadosParamsProps>();

  useEffect(() => {
    apiTeste4.find((item) => {
      if (item.id === id) {
        setUsuarioDados({
          id: item.id,
          name: item.name,
          email: item.email,
          senha: item.senha
        })
      }
      return '';
    });
  }, [id]);

  return (
    <Row>
      <Col md={12} className="mt-4 mb-5">
        <h1>Perfil</h1>
      </Col>
      <Col md={12}>
        <ListGroup>
          <ListGroupItem>
            <span className='mr-2' style={{fontWeight: 'bold'}}>Nome: </span>{usuarioDados.name}
          </ListGroupItem>
          <ListGroupItem>
            <span className='mr-2' style={{fontWeight: 'bold'}}>Email: </span>{usuarioDados.email}
          </ListGroupItem>
          <ListGroupItem>
            <span className='mr-2' style={{fontWeight: 'bold'}}>Senha: </span>{usuarioDados.senha}
          </ListGroupItem>
        </ListGroup>
      </Col>
    </Row>
  );
}