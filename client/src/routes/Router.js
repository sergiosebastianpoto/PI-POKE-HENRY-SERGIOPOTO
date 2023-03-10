import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LandingHome from "../components/LandingHome";
import Detail from "../components/Detail";
import Form from "../components/Form";
import Home from "../components/Home/Home";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/Home">
          <Home />
        </Route>
        <Route path="/Detail">
          <Detail />
        </Route>
        <Route path="/Form">
          <Form />
        </Route>
        <Route path="/">
          <LandingHome />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
