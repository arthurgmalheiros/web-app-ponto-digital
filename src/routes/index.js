import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../views/home";
import Frequencia from "../views/frequencia";

const Routes = () => (
  <Router>
    <Route exact path="/" component={Home} />
    <Route exact path="/frequencia" component={Frequencia} />
  </Router>
);
export default Routes;
