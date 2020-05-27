import React, { useState } from 'react';

import {
  Formik, Field
} from 'formik';
import Validate from './validade';
import {
  Container,
  EmpresaForm,
  CustomInputText,
  ErrorCustom,
  CustomInputSelect,
} from './styled';



async function postData(url = '', data = {}) {
  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *client
    body: JSON.stringify(data)
  });

  return response.json();
}

function Empresa() {
  const [token, setToken] = useState('')

  window.recaptchaCallback = (responseToken) => {
    setToken(responseToken)
  }

  return <Container>
    <h1>Cadastre sua empresa</h1>
    <Formik
      initialValues={{
        name: '',
        city: '',
        email: '',
        relocationSupport: '',
        startDelay: '',
        processTime: '',
        remote: ''
      }}
      validationSchema={Validate}
      onSubmit={(values, { setSubmitting }) => {
        window.grecaptcha.execute(process.env.REACT_APP_CAPTCHA_KEY, {
          action: 'create_company'
        }).then(function (resultToken) {
          const data = {
            ...values,
            recaptcha: resultToken
          }

          console.log(token)

          postData(
              process.env.REACT_APP_BACKEND_URL,
              data
          ).then((result) => {
              alert(JSON.stringify(result, null, 2));
              setSubmitting(false);
            })
        })
      }}
      // onSubmit={(values, actions) => {
      //   console.log(values, actions)
      //   window.grecaptcha.execute(process.env.REACT_APP_CAPTCHA_KEY, {
      //     action: 'create_company'
      //   }).then(function (resultToken) {
      //     postData(`${process.env.REACT_APP_API_ENDPOINT}/company`, {
      //       ...values,
      //       recaptcha: resultToken
      //     }).then((result) => {
      //       console.log(result)
      //     })
      //   })
      // }}
    >
      {({isSubmitting}) => (
        <EmpresaForm>
          <CustomInputText>
            <label htmlFor='name'>Nome da empresa</label>
            <Field type='text' name='name' placeholder='ex: Future Employer Inc.' />
            <ErrorCustom name='name' component='div' />
          </CustomInputText>
          <CustomInputText>
            <label htmlFor='email'>Email</label>
            <Field type='email' name='email' placeholder='email@do.rh' />
            <ErrorCustom name='email' component='div' />
          </CustomInputText>
          <CustomInputText>
            <label htmlFor='city'>Cidade</label>
            <Field type='text' name='city' placeholder='Cidade' />
            <ErrorCustom name='city' component='div' />
          </CustomInputText>
          <CustomInputSelect>
          <label htmlFor='relocationSupport'>Suporte a realocação</label>
            <Field as='select' name='relocationSupport'>
              <option value='' disabled>Suporte a realocação.</option>
              <option value='no'>Não</option>
              <option value='yes'>Sim</option>
            </Field>
            <ErrorCustom name='relocationSupport' component='div' />
          </CustomInputSelect>
          <CustomInputSelect>
            <label htmlFor='remote'>Trabalho remoto</label>
            <Field as='select' name='remote'>
              <option value=''>Trabalho remoto.</option>
              <option value='no'>Não</option>
              <option value='corona'>Sim, somente no período de isolamento.</option>
              <option value='yes'>Sim, temos oportunidades remotas após o período de isolamento.</option>
            </Field>
            <ErrorCustom name='remote' component='div' />
          </CustomInputSelect>
          <CustomInputSelect>
            <label htmlFor='startDelay'>Disponibilidade de contratação</label>
            <Field as='select' name='startDelay'>
              <option value=''>Disponibilidade de contratação.</option>
              <option value='immediate'>Imediato</option>
              <option value='until_30'>Até 30 dias.</option>
              <option value='more_than_30'>Mais que 30 dias.</option>
            </Field>
            <ErrorCustom name='startDelay' component='div' />
          </CustomInputSelect>
          <CustomInputSelect>
            <label htmlFor='processTime'>Média de tempo do processo seletivo</label>
            <Field as='select' name='processTime'>
              <option value=''>Tempo do processo seletivo.</option>
              <option value='until_7'>Até 7 dias.</option>
              <option value='until_15'>Até 15 dias.</option>
              <option value='more_than_15'>Mais que 15 dias.</option>
            </Field>
            <ErrorCustom name='processTime' component='div' />
          </CustomInputSelect>
          <CustomInputText>
            <label htmlFor='website'>Website</label>
            <Field type='text' name='website' placeholder='https://sua.empresa.exemplo' />
            <ErrorCustom name='website' component='div' />
          </CustomInputText>
          <CustomInputText>
            <label htmlFor='logoUrl'>Url para logo da empresa</label>
            <Field type='text' name='logoUrl' placeholder='https://sua.empresa.exemplo/logo.png' />
            <ErrorCustom name='logoUrl' component='div' />
          </CustomInputText>
          <CustomInputText>
            <label htmlFor='opportunities'>Link para lista de oportunidades</label>
            <Field type='text' name='opportunities' placeholder='https://sua.empresa.exemplo/vagas' />
            <ErrorCustom name='opportunities' component='div' />
          </CustomInputText>
          <div className='row'>
            <div
              id='re-captcha'
              data-verifycallbackname='recaptchaCallback'
            />
          </div>
          <div className='row'>
            <button type='submit' disabled={isSubmitting}>Cadastrar empresa</button>
          </div>
        </EmpresaForm>
      )}
    </Formik>
  </Container>
}

export default Empresa;
