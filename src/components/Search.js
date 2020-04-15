import React from 'react'
import styled from 'styled-components'

const SearchContainer = styled.div`
  width: 780px;
  margin: 0 auto;
  padding-top: 43px;
`

const SearchInput = styled.input`
  width: 524px;
  height: 40px;
  border: 0;
  border-radius: 6px;
  background-color: #ffffff;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #3d3d3d;
  padding: 5px;
`

const SearchButton = styled.button`
  width: 227px;
  height: 50px;
  border: 0;
  border-radius: 6px;
  background-color: #00df7d;
  font-family: Rubik;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.32px;
  text-align: center;
  color: #322972;
  margin-left: 15px;
`

export default function Search() {
  return <SearchContainer>
    <SearchInput type='text' placeholder='Digite o cargo ou emprego' />
    <SearchButton>BUSCAR NOVO EMPREGO</SearchButton>
  </SearchContainer>
}
