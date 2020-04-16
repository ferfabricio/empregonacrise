import React from 'react'
import styled from 'styled-components'

const SuggestionContainer = styled.div`
  width: 100%;
  font-size: 12px;
  margin-top: 23px;
  display: table;

  p {
    display: table-cell;
    color: #ffffff;
  }

  div {
    display: table-cell;
  }

  div ul {
    display: flex;
    flex-direction: row;
  }

  div ul li {
    padding: 10px;
    color: #b7afed;
    text-decoration: underline;
  }

  div ul li:hover {
    cursor: pointer;
  }
`

export default function SuggestionBox() {
  return <SuggestionContainer>
    <p>Os mais buscados</p>
    <div>
      <ul>
        <li>Designer</li>
        <li>Frontend</li>
        <li>Redator</li>
        <li>Programador Java</li>
        <li>Backend</li>
      </ul>
    </div>
  </SuggestionContainer>
}
