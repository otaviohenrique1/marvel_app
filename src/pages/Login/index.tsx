import React from "react";
import { Container, Row, Col, Button, ButtonGroup, Form } from "reactstrap";
import Campo from "../../components/Campo";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <Container>
      <Row>
        <Col md={12} className="mb-5 mt-5">
          <h1>E-Commerce-App</h1>
          <h2>Login</h2>
        </Col>
      </Row>
        <Form>
          <Campo
            htmlFor="email"
            label="Email"
            typeInput="email"
            nameInput="email"
            idInput="email"
            placeholderInput="Digite a email do usuario"
          />
          <Campo
            htmlFor="senha"
            label="Senha"
            typeInput="password"
            nameInput="senha"
            idInput="senha"
            placeholderInput="Digite a senha do usuario"
          />
          <Row>
            <Col md={12}>
              <Link
                to="/usuario/cadastro"
                style={{
                  textDecoration: 'none',
                  color: 'white'
                }}>
                <Button color="info" type="button">Novo usuario</Button>
              </Link>
            </Col>
            <Col md={12} className="button-container">
              <ButtonGroup>
                <Button color="primary" type="submit">Entrar</Button>
                <Button color="danger" type="reset">Limpar</Button>
              </ButtonGroup>
            </Col>
          </Row>
        </Form>
    </Container>
  );
}
