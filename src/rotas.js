import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./paginas/Login";
import Cadastro from "./paginas/Cadastro";
import Principal from "./paginas/Principal";

const Rotas = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/cadastro" component={Cadastro} />
        <Route exact path="/principal" component={Principal} />
      </Switch>
    </BrowserRouter>
  );
};

export default Rotas;
