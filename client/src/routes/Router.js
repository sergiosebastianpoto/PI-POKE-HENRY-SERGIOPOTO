import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LandingHome from "../components/LandingHome";

import Detail from "../components/Detail";
import Form from "../components/Form";
import Home from "../components/Home";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/Home">
          <Home />
        </Route>
        <Route path="/">
          <LandingHome />
        </Route>
        <Route path="/Detail">
          <Detail />
        </Route>
        <Route path="/Form">
          <Form />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
