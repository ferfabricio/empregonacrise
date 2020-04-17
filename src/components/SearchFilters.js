import React from 'react'
import styled from 'styled-components'
import FindInput from './FindInput'

const FilterContainer = styled.aside`
  width: 300px;
  margin: 74px auto auto 10%;

  h3 {
    color: #4239bc;
    font-family: Roboto;
    font-size: 14px;
    margin: 40px 8px auto;
  }

  li {
    font-family: Roboto;
    font-size: 14px;
    font-weight: 300;
    line-height: 1.6;
    letter-spacing: normal;
    color: #9b9b9b;
    margin: auto 8px;
    padding: 15px 0px;
  }

  li.selected {
    font-weight: 500;
    color: #4a4a4a;
  }
`

export default function SearchFilters({ categories }) {
  return <FilterContainer>
    <FindInput placeholder='Local de trabalho' />
    <div>
      <h3>Categoria</h3>
      <ul>
        {categories.map(categorie => {
          return <li key={categorie.name}>{categorie.name} ({categorie.opportunities})</li>
        })}
      </ul>
      <h3>Suporte a realocação pós crise</h3>
    </div>
  </FilterContainer>
}
