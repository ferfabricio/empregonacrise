import styled from 'styled-components';
import {
  ErrorMessage, Form
} from 'formik'


export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-sizing: border-box;
  margin: 60px 0;
`;

export const EmpresaForm = styled(Form)`
    width: 600px;
    box-sizing: border-box;
`;

export const CustomInputText = styled.div`
  width: 100%;
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  label {
    width: 100%;
    box-sizing: border-box;
    font-size: 16px;
    color: #bdbdbd;
    padding-left: 10px;
    margin-bottom: 5px;
  }

  input {
    width: 100%;
    box-sizing: border-box;
    height: 50px;
    border-radius: 6px;
    border: solid 1px #bdbdbd;
    padding: 0 10px;
    outline: none;
    
    &::placeholder {
      color: #9b9b9b;
    }
  }
`;

export const CustomInputSelect = styled.div`
  width: 100%;
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  label {
    width: 100%;
    box-sizing: border-box;
    font-size: 16px;
    color: #bdbdbd;
    padding-left: 10px;
    margin-bottom: 5px;
  }

  select {
    width: 100%;
    box-sizing: border-box;
    height: 50px;
    background: #FFFFFF;
    border-radius: 6px;
    border: solid 1px #bdbdbd;
    padding: 0 10px;
    outline: none;
    /* color: #9b9b9b; */
    
    & > option[value=''] {
      display: none;
      color: #9b9b9b;
    }
  }
`;

export const ErrorCustom = styled(ErrorMessage)`
    font-size: 12px;
    color: red;
    margin-top: 5px;
    padding-left: 5px;
`;
