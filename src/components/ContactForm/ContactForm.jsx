import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import css from './ContactForm.module.css'

const Schema = Yup.object().shape({
  name: Yup.string().min(3, 'Too short').max(50, 'Too long').required("Required"),
  number: Yup.string().min(3, 'Too short').max(50, 'Too long').required("Required")
});


const initialValues = {
  name: '',
  number: ''
};

const ErrMessage = (msg) => <p className={css.customerror}>{msg}</p>

const ContactForm = ({ handleSubmit }) => {

  const nameFieldId = useId();
  const numberFieldId = useId();

    return (    
      <Formik       
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={Schema}>
            <Form className={css.form}>
              <div className={css.wrapper}>
                <label htmlFor={nameFieldId} className={css.title}>Name</label>
                <Field type="text" name="name" id={nameFieldId} className={css.input} />
                <ErrorMessage name="name" render={(msg)=>ErrMessage(msg)}/>
              </div>
              <div className={css.wrapper}>
                <label htmlFor={numberFieldId} className={css.title}>Number</label>
                <Field type="numeric" name="number" id={numberFieldId} className={css.input} />
                <ErrorMessage name="number" render={(msg)=>ErrMessage(msg)}/>
              </div>
              <button type="submit" className={css.button}>Add contact</button>
          </Form>  
      </Formik>    
  );
};


export default ContactForm;