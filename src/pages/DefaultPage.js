import React from 'react'
import styled from 'styled-components'

import Header from '../components/Header'

const RootContainer = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300;1,400;1,500;1,700;1,900&display=swap');
  font-family: Rubik;
`

export default function DefaultPage({ children }) {
  return <RootContainer>
    <Header />
    {children}
  </RootContainer>
}
