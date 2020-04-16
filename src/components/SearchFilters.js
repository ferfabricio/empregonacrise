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

export default function SearchFilters() {
  return <FilterContainer>
    <FindInput placeholder='Local de trabalho' />
    <div>
      <h3>Categoria</h3>
      <ul>
        <li>Backend (50)</li>
        <li>Backend</li>
        <li>Backend</li>
        <li className='selected'>Backend (123)</li>
        <li>Backend</li>
      </ul>
      <h3>Suporte a realocação pós crise</h3>
    </div>
  </FilterContainer>
}
