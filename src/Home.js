import React from 'react'
import styled from 'styled-components'

import Company from './components/Company'

const CompaniesGrid = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export default function Home() {
    return <div>
      <div>todo: filtros</div>
      <CompaniesGrid>
        <Company />
        <Company />
        <Company />
        <Company />
        <Company />
        <Company />
        <Company />
        <Company />
        <Company />
        <Company />
        <Company />
        <Company />
        <Company />
      </CompaniesGrid>
    </div>
}
