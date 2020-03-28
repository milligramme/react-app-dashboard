import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { CssBaseline } from "@material-ui/core";

import Home from "../pages/Home";
import About from "../pages/About";

const Router: React.FunctionComponent = () => (
  <>
    <CssBaseline />
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/"><Home /></Route>
        <Route exact={true} path="/about"><About /></Route>
      </Switch>
    </BrowserRouter>
  </>
);


export default Router;
