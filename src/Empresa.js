import React, { useState } from 'react'

import {
  ErrorMessage, Formik, Form, Field
} from 'formik'
import * as Yup from 'yup'

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

  return <div>
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
      validationSchema={Yup.object().shape({
        name: Yup.string().required('Por favor preencha o nome da empresa.'),
        city: Yup.string().required('Por favor preencha a cidade da empresa.'),
        email: Yup.string().email('Informe um endereço de email válido.').required('Endereço de email é obrigatório.'),
        relocationSupport: Yup.mixed().oneOf(['yes', 'no'], 'Por favor preencha a opção de suporte a realocação.').required('Por favor preencha a opção de suporte a realocação.'),
        startDelay: Yup.mixed().oneOf(['immediate', 'until_30', 'more_than_30'], 'Por favor selecione um dos valores.').required('Por favor selecione um dos valores.'),
        processTime: Yup.mixed().oneOf(['until_7', 'until_15', 'more_than_15'], 'Por favor selecione um dos valores.').required('Por favor selecione um dos valores.'),
        remote: Yup.mixed().oneOf(['no', 'corona', 'yes'], 'Por favor selecione um dos valores.').required('Por favor selecione um dos valores.'),
        website: Yup.string().url('Por favor informe uma URL válida.').required('Por favor informe uma URL válida.'),
        logoUrl: Yup.string().url('Por favor informe uma URL válida.').required('Por favor informe uma URL válida.'),
        opportunities: Yup.string().url('Por favor informe uma URL válida.').required('Por favor informe uma URL válida.')
      })}
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
        <Form>
          <div className='row'>
            <label htmlFor='name'>Nome da empresa</label>
            <Field type='text' name='name' placeholder='ex: Future Employer Inc.' />
            <ErrorMessage name='name' component='div' />
          </div>
          <div className='row'>
            <label htmlFor='email'>Email</label>
            <Field type='email' name='email' placeholder='email@do.rh' />
            <ErrorMessage name='email' component='div' />
          </div>
          <div className='row'>
            <label htmlFor='city'>Cidade</label>
            <Field type='text' name='city' placeholder='Cidade' />
            <ErrorMessage name='city' component='div' />
          </div>
          <div className='row'>
          <label htmlFor='relocationSupport'>Suporte a realocação</label>
            <Field as='select' name='relocationSupport'>
              <option value=''>Suporte a realocação.</option>
              <option value='no'>Não</option>
              <option value='yes'>Sim</option>
            </Field>
            <ErrorMessage name='relocationSupport' component='div' />
          </div>
          <div className='row'>
            <label htmlFor='remote'>Trabalho remoto</label>
            <Field as='select' name='remote'>
              <option value=''>Trabalho remoto.</option>
              <option value='no'>Não</option>
              <option value='corona'>Sim, somente no período de isolamento.</option>
              <option value='yes'>Sim, temos oportunidades remotas após o período de isolamento.</option>
            </Field>
            <ErrorMessage name='remote' component='div' />
          </div>
          <div className='row'>
            <label htmlFor='startDelay'>Disponibilidade de contratação</label>
            <Field as='select' name='startDelay'>
              <option value=''>Disponibilidade de contratação.</option>
              <option value='immediate'>Imediato</option>
              <option value='until_30'>Até 30 dias.</option>
              <option value='more_than_30'>Mais que 30 dias.</option>
            </Field>
            <ErrorMessage name='startDelay' component='div' />
          </div>
          <div className='row'>
            <label htmlFor='processTime'>Média de tempo do processo seletivo</label>
            <Field as='select' name='processTime'>
              <option value=''>Tempo do processo seletivo.</option>
              <option value='until_7'>Até 7 dias.</option>
              <option value='until_15'>Até 15 dias.</option>
              <option value='more_than_15'>Mais que 15 dias.</option>
            </Field>
            <ErrorMessage name='processTime' component='div' />
          </div>
          <div className='row'>
            <label htmlFor='website'>Website</label>
            <Field type='text' name='website' placeholder='https://sua.empresa.exemplo' />
            <ErrorMessage name='website' component='div' />
          </div>
          <div className='row'>
            <label htmlFor='logoUrl'>Url para logo da empresa</label>
            <Field type='text' name='logoUrl' placeholder='https://sua.empresa.exemplo/logo.png' />
            <ErrorMessage name='logoUrl' component='div' />
          </div>
          <div className='row'>
            <label htmlFor='opportunities'>Link para lista de oportunidades</label>
            <Field type='text' name='opportunities' placeholder='https://sua.empresa.exemplo/vagas' />
            <ErrorMessage name='opportunities' component='div' />
          </div>
          <div className='row'>
            <div
              id='re-captcha'
              data-verifycallbackname='recaptchaCallback'
            />
          </div>
          <div className='row'>
            <button type='submit' disabled={isSubmitting}>Cadastrar empresa</button>
          </div>
        </Form>
      )}
    </Formik>
  </div>
}

export default Empresa
