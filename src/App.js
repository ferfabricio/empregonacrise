import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import DefaultPage from './pages/DefaultPage'
import Sobre from './Sobre';
import Home from './pages/Home';
import Empresa from './Empresa';

export default function App() {

  useEffect(() => {
    const script = document.createElement('script')

    script.src = `https://www.google.com/recaptcha/api.js?render=${process.env.REACT_APP_CAPTCHA_KEY}`

    document.body.appendChild(script)
  }, [])

  return <Router>
    <DefaultPage>
      <Switch>
        <Route path="/oferecer-vaga">
          <Empresa />
        </Route>
        <Route path="/sobre">
          <Sobre />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </DefaultPage>
  </Router>
}
