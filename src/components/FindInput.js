import React from 'react'
import styled from 'styled-components'

const FindContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Roboto;
  font-size: 14px;

  div span {
    line-height: 80%;
  }
`

const InputText = styled.input`
  padding: 15px;
  margin: 10px;
  width: 250px;
  height: 50px;
  border-radius: 6px;
  border: solid 1px #bdbdbd;
  box-sizing: border-box;
  background: url('find-icon.svg') 215px 12px no-repeat;
`

const CustomCheckBox = styled.input`
  width: 19px;
  height: 19px;
  border-radius: 3px;
  border: solid 1px #4a4a4a;
  margin: auto 8px;
  padding-top: 10px;
`

export default function FindInput(props) {
  return <FindContainer>
    <InputText type='text' {...props} />
    <div>
      <CustomCheckBox type='checkbox' />
      <span>Vagas Remoto</span>
    </div>
  </FindContainer>
}
