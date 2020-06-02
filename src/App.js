import React, { useEffect } from 'react';
import styled from 'styled-components'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Sobre from './pages/Sobre';
import Home from './pages/Home';
import Empresa from './Empresa';
import Header from './components/Header'

const RootContainer = styled.div`
  font-family: Rubik;
`

export default function App() {
  useEffect(() => {
    const script = document.createElement('script')

    script.src = `https://www.google.com/recaptcha/api.js?render=${process.env.REACT_APP_CAPTCHA_KEY}`

    document.body.appendChild(script)
  }, [])

  return <Router>
    <RootContainer>
      <Header />
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
    </RootContainer>
  </Router>
}
