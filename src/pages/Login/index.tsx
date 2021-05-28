import React from "react";
import { Container, Row, Col, Button, ButtonGroup, Form } from "reactstrap";
import Campo from "../../components/Campo";
import { Link } from "react-router-dom";
import '../../styles/scss/login/style.scss';
import { BsChatSquareDots } from "react-icons/bs";

export default function Login() {
  return (
    <Container>
      <Row>
        <Col md={12} className="mb-3 mt-5">
          <h1><BsChatSquareDots size={40} className='mr-3'/>Marvel-App</h1>
        </Col>
        <Col md={12}>
          <Form>
            <Campo
              className="mt-5"
              htmlFor="email"
              label="Email"
              typeInput="email"
              nameInput="email"
              idInput="email"
              placeholderInput="Digite a email do usuario"
              required={true}
            />
            <Campo
              className="mt-2"
              htmlFor="senha"
              label="Senha"
              typeInput="password"
              nameInput="senha"
              idInput="senha"
              placeholderInput="Digite a senha do usuario"
              required={true}
            />
            <Row className="mt-5">
              <Col md={12} className="button-container">
                <ButtonGroup>
                  <Link to="/home" className="botao-link">
                    <Button
                      color="primary"
                      type="button"
                      className="btn-entrar"
                    >
                      Entrar
                    </Button>
                  </Link>
                  <Button color="danger" type="reset">Limpar</Button>
                  <Link to="/usuarios/cadastro" className="botao-link">
                    <Button
                      color="info"
                      type="button"
                      className="btn-novo-usuario"
                    >
                      Novo usuario
                    </Button>
                  </Link>
                </ButtonGroup>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
