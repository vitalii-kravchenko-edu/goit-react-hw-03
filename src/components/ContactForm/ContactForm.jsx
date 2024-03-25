import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

import styles from "./ContactForm.module.css";

const contactFormSchema = Yup.object({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .matches("^\\d{3}-\\d{2}-\\d{2}$", "Number format 111-11-11")
    .required("Required"),
});

const FORM_INITIAL_VALUES = {
  name: "",
  number: "",
};

const ContactForm = ({ onAddContact }) => {
  const handleSubmit = (values, actions) => {
    onAddContact(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={FORM_INITIAL_VALUES}
      validationSchema={contactFormSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form}>
        <label>
          <span>Name</span>
          <br />
          <Field type="text" name="name" />
          <ErrorMessage component="p" name="name" />
        </label>
        <label>
          <span>Number</span>
          <br />
          <Field type="text" name="number" />
          <ErrorMessage component="p" name="number" />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
