import React from 'react';

import {
  ErrorMessage, Formik, Form, Field
} from 'formik'
import * as Yup from 'yup';

export default function Empresa() {
  return <div>
      <h1>Cadastre sua empresa</h1>
      <Formik
        initialValues={{
          name: '',
          city: '',
          email: '',
          relocationSupport: "",
          startDelay: "",
          processTime: "",
          remote: ""
        }}
        validationSchema={Yup.object().shape({
          name: Yup.string().required('Por favor preencha o nome da empresa.'),
          city: Yup.string().required('Por favor preencha a cidade da empresa.'),
          email: Yup.string().email('Informe um endereço de email válido.').required('Endereço de email é obrigatório.'),
          relocationSupport: Yup.mixed().oneOf(['yes', 'no'], 'Por favor preencha a opção de suporte a realocação.').required('Por favor preencha a opção de suporte a realocação.'),
          startDelay: Yup.mixed().oneOf(['immediate', 'until_30', 'more_than_30'], 'Por favor selecione um dos valores.').required('Por favor selecione um dos valores.'),
          processTime: Yup.mixed().oneOf(['until_7', 'until_15', 'more_than_15'], 'Por favor selecione um dos valores.').required('Por favor selecione um dos valores.'),
          remote: Yup.mixed().oneOf(['no', 'corona', 'yes'], 'Por favor selecione um dos valores.').required('Por favor selecione um dos valores.')
        })}
        onSubmit={(values, actions) => {
          setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              actions.setSubmitting(false);
          }, 1000);
        }}
      >
          {() => (
            <Form>
              <label htmlFor="name">Nome da empresa</label>
              <Field type="text" name="name" placeholder="ex: Future Employer Inc." />
              <ErrorMessage name="name" component="div" />

              <label htmlFor="email">Email</label>
              <Field type="email" name="email" placeholder="email@do.rh" />
              <ErrorMessage name="email" component="div" />

              <label htmlFor="city">Cidade</label>
              <Field type="text" name="city" placeholder="Cidade" />
              <ErrorMessage name="city" component="div" />

              <label htmlFor="relocationSupport">Suporte a realocação</label>
              <Field as="select" name="relocationSupport">
                <option value="">Suporte a realocação.</option>
                <option value="no">Não</option>
                <option value="yes">Sim</option>
              </Field>
              <ErrorMessage name="relocationSupport" component="div" />

              <label htmlFor="remote">Trabalho remoto</label>
              <Field as="select" name="remote">
                <option value="">Trabalho remoto.</option>
                <option value="no">Não</option>
                <option value="corona">Sim, somente no período de isolamento.</option>
                <option value="yes">Sim, temos oportunidades remotas após o período de isolamento.</option>
              </Field>
              <ErrorMessage name="remote" component="div" />

              <label htmlFor="startDelay">Disponibilidade de contratação</label>
              <Field as="select" name="startDelay">
                <option value="">Disponibilidade de contratação.</option>
                <option value="immediate">Imediato</option>
                <option value="until_30">Até 30 dias.</option>
                <option value="more_than_30">Mais que 30 dias.</option>
              </Field>
              <ErrorMessage name="startDelay" component="div" />

              <label htmlFor="processTime">Média de tempo do processo seletivo</label>
              <Field as="select" name="processTime">
                <option value="">Tempo do processo seletivo.</option>
                <option value="until_7">Até 7 dias.</option>
                <option value="until_15">Até 15 dias.</option>
                <option value="more_than_15">Mais que 15 dias.</option>
              </Field>
              <ErrorMessage name="processTime" component="div" />

              <button type="submit">Cadastrar</button>
            </Form>
          )}
      </Formik>
    </div>
}
