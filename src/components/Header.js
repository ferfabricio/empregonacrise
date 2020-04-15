import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const HeaderContainer = styled.header`
  width: 100%;
  height: 480 px;
  background-color: #322972;
`

const NavContainer = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: 35px;
`

const LogoContainer = styled.div`
  padding-left: 10%;
  flex: 1 1 auto;
`

const LogoImage = styled.img`
  height: 75px;
`

const AboutText = styled(Link)`
  font-family: Rubik;
  font-size: 14px;
  letter-spacing: 0.32px;
  text-align: center;
  color: #ffffff;
  text-decoration: none;
  padding-right: 40px;
`

const RegisterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 274px;
  height: 45px;
  border-radius: 6px;
  border: solid 2px #00df7d;
  margin-right: 10%;
`

const RegisterText = styled(Link)`
  font-family: Rubik;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.32px;
  text-decoration: inherit;
  color: #00df7d;
`

export default function Header({ searchBox }) {
  return <HeaderContainer>
    <NavContainer>
      <LogoContainer>
        <Link to="/">
          <LogoImage src="logo.svg" alt="Emprego na crise" />
        </Link>
      </LogoContainer>
      {searchBox}
      <div>
        <AboutText to="/sobre">Sobre nós</AboutText>
      </div>
      <RegisterContainer>
          <RegisterText to="/oferecer-vaga">QUERO OFERECER UMA VAGA</RegisterText>
      </RegisterContainer>
    </NavContainer>
  </HeaderContainer>
}
