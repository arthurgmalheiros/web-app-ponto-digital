import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "../views/login";
import Home from "../views/home";
import Frequencia from "../views/frequencia";
import Cadastro from "../views/cadastro";

const Routes = () => (
  <Router>
    <Route exact path="/" component={Login} />
    <Route exact path="/Home" component={Home} />
    <Route exact path="/Frequencia" component={Frequencia} />
    <Route exact path="/Cadastro" component={Cadastro} />
  </Router>
);
export default Routes;
