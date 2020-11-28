import React, { useState, useEffect } from "react";
import { GlobalStyle } from "./styles/GlobalStyle";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Details from './pages/Details/Details';

import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/chapter/:id">
            <Details />
          </Route>
        </Switch>
      </Router>
      <GlobalStyle />
    </>
  );
}

export default App;
