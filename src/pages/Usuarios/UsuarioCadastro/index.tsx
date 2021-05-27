import { Container, Row, Col, Button, ButtonGroup, Form } from "reactstrap";
import "./style.css"
import Campo from "../../../components/Campo";
import { Link } from "react-router-dom";
// import api from "../../../services/api";

// interface FormTypes {
//   nome: string;
//   email: string;
//   senha: string;
// }

export default function CadastroUsuarios() {
  // async function handleSubmitForm(values: FormTypes) {}

  return (
    <Container>
      <Row>
        <Col md={12} className="mb-5 mt-5">
          <h1>Cadastro de Usuários</h1>
        </Col>
      </Row>
      <Form>
        <Campo
          htmlFor="nome"
          label="Nome"
          typeInput="text"
          nameInput="nome"
          idInput="nome"
          placeholderInput="Digite o nome do usuario"
        />
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
        <ButtonGroup>
          <Button color="primary" type="submit">Salvar</Button>
          <Button color="danger" type="reset">Limpar</Button>
          <Link to="/" className="btn-item-link">
            <Button
              color="secondary"
              type="button"
              className="btn-voltar"
            >
              Voltar
            </Button>
          </Link>
        </ButtonGroup>
      </Form>
    </Container>
  );
}
