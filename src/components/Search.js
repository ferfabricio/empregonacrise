import React from 'react'
import styled from 'styled-components'
import SuggestionBox from './SuggestionBox'

const SearchInput = styled.input `
  width: 508px;
  height: 40px;
  border: 0;
  border-radius: 6px;
  background-color: #ffffff;
  font-family: Roboto;
  font-size: 16px;
  color: #3d3d3d;
  padding: 5px 12px;
`

const SearchButton = styled.button `
  width: 227px;
  height: 50px;
  border: 0;
  border-radius: 6px;
  background-color: #00df7d;
  font-weight: 500;
  letter-spacing: 0.32px;
  text-align: center;
  color: #322972;
  margin-left: 15px;
`

const SearchContainer = styled.div`
  width: 780px;
  margin: 0 auto;
  padding-top: 43px;
`

export default function Search() {
  return <SearchContainer>
    <SearchInput type='text' placeholder='Digite o cargo ou emprego' />
    <SearchButton>BUSCAR NOVO EMPREGO</SearchButton>
    <SuggestionBox />
  </SearchContainer>
}
