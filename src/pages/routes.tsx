import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import QuadrinhosLista from "./Quadrinhos/QuadrinhosLista";
import PersonagensLista from "./Personagens/PersonagensLista";
import PersonagemDados from "./Personagens/PersonagemDados";
import UsuarioDados from "./Usuarios/UsuarioDados";
import QuadrinhosDados from "./Quadrinhos/QuadrinhosDados";
import Login from "./Login";
import UsuarioCadastro from "./Usuarios/UsuarioCadastro";
import Favoritos from "./Usuarios/Favoritos";
import PageContainer from '../components/PageContainer';

export default function Routes() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route component={Login} path="/" exact/>
          <Route component={UsuarioCadastro} path="/usuarios/cadastro" />
          <PageContainer>
            <Route component={Home} path="/home" exact/>
            <Route component={PersonagensLista} path="/personagens" exact />
            <Route component={PersonagemDados} path="/personagens/:id" />
            <Route component={QuadrinhosLista} path="/quadrinhos" exact />
            <Route component={QuadrinhosDados} path="/quadrinhos/:id" />
            <Route component={UsuarioDados} path="/usuario/:id" exact/>
            <Route component={Favoritos} path="/favoritos/:id" exact/>
          </PageContainer>
        </Switch>
      </BrowserRouter>
    </>
  );
}