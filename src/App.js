import React, { useEffect } from 'react';
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

  useEffect(() => {
    const script = document.createElement('script')

    script.src = `https://www.google.com/recaptcha/api.js?render=${process.env.REACT_APP_CAPTCHA_KEY}`

    document.body.appendChild(script)
  }, [])

  return <Router>
    <ul className='menu'>
      <li className='menu-item'>
        <Link to="/">Home</Link>
      </li>
      <li className='menu-item'>
        <Link to="/cadastrar-empresa">Cadastre sua empresa</Link>
      </li>
      <li className='menu-item'>
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
