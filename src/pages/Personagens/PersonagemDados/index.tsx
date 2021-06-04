import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Button, Col, Form, ListGroup, ListGroupItem, Row } from 'reactstrap';
import apiTeste from '../../../services/api_teste/api_teste_1';
import apiTeste4 from '../../../services/api_teste/api_teste_4';
import apiServer from '../../../services/api_server';
// import api_marvel_teste from '../../../services/api_marvel_teste';
import { BsHeartFill, BsHeart } from "react-icons/bs";
import api from '../../../services/api_server';
import { useAppContext } from '../../../contexts/AppContext';

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
  // const [favoritoExiste, setFavoritoExiste] = useState<boolean>(false);
  // const [userData, setUserData] = useState<ResponseData[]>([]);
  const { usuarioData } = useAppContext();

  
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
  
  useEffect(() => {
    api.get(`favoritos/busca/?user_id=${usuarioData.id}&item_id=${id}`).then();
  }, [id, usuarioData.id]);

  // useEffect(() => {
  //   api_marvel_teste.get(`personagem/${id}`)
  //   .then((item) => {
  //     setDataMarvel({
  //       name: item.data.name,
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
    apiServer.post('favoritos', {
      "user_id": parseInt(apiTeste4[0].id),
    	"item_id": parseInt(id),
	    "name": (dataMarvel.name).toString(),
	    "favorite": favoritar,
	    "category": "Comics"
    })
    .then((value) => console.log(`${favoritar} - Marcado => ${value}`))
    .catch((erro) => console.log(`${favoritar} - Erro => - ${erro}`));
  }

  return (
    <Row>
      <Col md={12}>
        <h1>Dados do Personagem</h1>
      </Col>
      <Col md={12}>
        <ListGroup>
          <ListGroupItem>{dataMarvel.name}</ListGroupItem>
          <ListGroupItem>
            <img src={`${dataMarvel.thumbmail.path}.${dataMarvel.thumbmail.extension}`} alt={dataMarvel.name} width={200}  />
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
                  <BsHeart size={40}/>
                  ) : (
                  <BsHeartFill size={40}/>
                )}
              </Button>
            </Form>
          </ListGroupItem>
        </ListGroup>
      </Col>
    </Row>
  );
}