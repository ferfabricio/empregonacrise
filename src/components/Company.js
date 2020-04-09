import React from 'react'
import styled from 'styled-components'
import Image from 'react-graceful-image'

const StyledCompany = styled.article`
  flex: 0 1 calc(25% - 1em);
  box-sizing: border-box;
  margin: 1rem .25em
  border: 1px solid green;
`

export default function Company({logoUrl, name, city }) {
  return <StyledCompany>
    <div className='logo'>
      <Image
        width='300'
        height='250'
        alt='My awesome image'
        placeholderColor='hsl(0, 0%, 70%)'
      />
    </div>
    <div className='name'>{name}</div>
    <div className='city'>{city}</div>
    <div className='action-buttons'>
      <div>Oportunidades</div>
      <div>Site da empresa</div>
    </div>
  </StyledCompany>
}
