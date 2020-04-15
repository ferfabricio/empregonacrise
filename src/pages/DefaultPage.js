import React from 'react'
import styled from 'styled-components'

import Header from '../components/Header'

const RootContainer = styled.div`
  font-family: Rubik;
`

export default function DefaultPage({ children }) {
  return <RootContainer>
    <Header />
    {children}
  </RootContainer>
}
