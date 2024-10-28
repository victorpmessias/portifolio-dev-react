import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './FormularioEmail.css';
import Input from './components/Input';
import FormButton from './components/FormButton';
import FormStatusMessage from './components/FormStatusMessage';

const FormularioEmail = () => {
  const [formStatus, setFormStatus] = useState('');
  const [formChanges, setformChanges] = useState('');
  const [emailError, setEmailError] = useState(null);

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
    }),
    onSubmit: (values, { setSubmitting }) => {
      setSubmitting(true);
      setFormStatus('');
    },
  });
  
  useEffect(() => {
    if (formik.isSubmitting && formik.isValid) {
      setTimeout(() => {
        setFormStatus('Formulário Enviado com Sucesso!');
        formik.setSubmitting(false);
      }, 1000);
    }
  }, [formik.isSubmitting, formik.isValid]);

  useEffect(() => {
      setEmailError(formik.touched.email && formik.errors.email ? formik.errors.email : null);
  }, [formik.touched.email, formik.errors.email]);

  useEffect(() => {
    setFormStatus('');
  }, [formChanges]);

  return (
    <div className='formContainer'>
      <h1>Formulário de E-mail</h1>
      <form onSubmit={formik.handleSubmit} onChange={(e) => setformChanges(e)}>
          <Input
            name='email'
            label='Email'
            error={emailError}
            {...formik.getFieldProps('email')}
          />
       <FormButton loading={formik.isSubmitting}/>
      </form>
      <FormStatusMessage message={formStatus}/>
    </div>
  );
};

export default FormularioEmail;
