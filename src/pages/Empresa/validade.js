import * as Yup from 'yup';

export default Yup.object().shape({
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
})