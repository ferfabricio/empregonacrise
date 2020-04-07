import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import Sobre from './Sobre';
import Home from './Home';
import Empresa from './Empresa';

export default function App() {
  return <Router>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/cadastrar-empresa">Cadastre sua empresa</Link>
      </li>
      <li>
        <Link to="/sobre">Sobre</Link>
      </li>
    </ul>
    <Switch>
      <Route path="/cadastrar-empresa">
        <Empresa />
      </Route>
      <Route path="/sobre">
        <Sobre />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>
}
