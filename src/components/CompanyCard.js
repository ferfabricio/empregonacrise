import React from 'react'
import styled from 'styled-components'

const CompanyContainer = styled.div`
  width: 280px;
  height: 320px;
  margin: 12px;
  background-color: #f8f7f7;

  :hover {
    box-shadow: 0 30px 30px 0 #f5f5f9;
    background-color: #ffffff;
  }
`

export default function CompanyCard() {
  return <CompanyContainer />
}
