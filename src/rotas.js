import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./paginas/Home";

const Rotas = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default Rotas;
