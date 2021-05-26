import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import QuadrinhosLista from "./Quadrinhos/QuadrinhosLista";
import PersonagensLista from "./Personagens/PersonagensLista";
import PersonagemDados from "./Personagens/PersonagemDados";

export default function Routes() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route component={Home} path="/" exact/>
          <Route component={QuadrinhosLista} path="/quadrinhos" />
          <Route component={PersonagensLista} path="/personagens" />
          <Route component={PersonagemDados} path="/personagens/:id" />
        </Switch>
      </BrowserRouter>
    </>
  );
}