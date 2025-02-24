import { ErrorMessage, Field, Form, Formik } from 'formik'
import { nanoid } from 'nanoid';
import * as Yup from 'yup';
import s from "./ContactForm.module.css"

const ContactForm = ({handleAddContact}) => {
    const initialValues = {
        name: '',
        number: '',
    };

    const validationSchema = Yup.object({
        name: Yup.string().min(3, "Min 3 symbols").max(50, "Max 50 symbols").required("Required"),
        number: Yup.string().min(3, "Min 3 symbols").max(50, "Max 50 symbols").required("Required"),
    });

    const handleSubmit = (values, actions) => {
        const newContact = {
            id: nanoid(),
            name: values.name,
            number: values.number,
        };
        handleAddContact(newContact);
        actions.resetForm();
    }
  return (
      <div className={s.formContainer}>
          <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
              <Form className={s.formWrapper}>
                  <p>Name</p>
                  <Field name='name' />
                  <ErrorMessage name="name" component="div" style={{ color: "red" }} />
                  <p>Number</p>
                  <Field name='number' type='number' />
                  <ErrorMessage name="number" component="div" style={{ color: "red" }} />
                  <button className={s.button} type='submit'>Add contact</button>
              </Form>
          </Formik>
    </div>
  )
}

export default ContactForm