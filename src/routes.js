import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Repositories from "./pages/Repositories";
import Home from "./pages/Home";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/repositories" component={Repositories} />
      </Switch>
    </Router>
  );
}
