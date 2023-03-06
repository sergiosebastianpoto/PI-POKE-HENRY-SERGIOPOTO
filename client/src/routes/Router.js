import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../components/Home";

import Detail from "../components/Detail";
import Form from "../components/Form";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
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
