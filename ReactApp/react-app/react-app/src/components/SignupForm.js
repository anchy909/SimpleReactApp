import React, { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

const DisplayingErrorMessagesSchema = Yup.object().shape({
    firstName: Yup.string()
    .max(15, 'Must be 15 characters or less')
    .required('Required'),
  lastName: Yup.string()
    .max(20, 'Must be 20 characters or less')
    .required('Required'),
  // project: Yup.string()
  //   .required('Required'),
  color: Yup.string()
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

export const SignupForm = () => {
  const [value, setValue] = useState('');

  const projects = [
    {id: '1', projectName: 'Project1'},
    {id: '2', projectName: 'Project2'},
    {id: '3', projectName: 'Project3'}
  ]
  
  const colors = [
    {id: '1', color: 'Project1'},
    {id: '2', color: 'Project2'},
    {id: '3', color: 'Project3'}
  ]

  const handleSubmit = (values) => {
    alert('AAAA')
    alert(values.color);
    console.log(values);
  }
  return (
    <Formik
      initialValues={{ firstName: '', lastName: '', email: '', project: '', color: '' }}
      validationSchema={DisplayingErrorMessagesSchema}
      onSubmit={handleSubmit}
    >
      {formik => (
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            type="text"
            {...formik.getFieldProps('firstName')}
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <div>{formik.errors.firstName}</div>
          ) : null}

          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            type="text"
            {...formik.getFieldProps('lastName')}
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <div>{formik.errors.lastName}</div>
          ) : null}

          <label htmlFor="email">Email Address</label>
          <input id="email" type="email" {...formik.getFieldProps('email')} />
              {formik.touched.email && formik.errors.email ? (
                <div>{formik.errors.email}</div>
              ) : null}

                    <label>Project</label>
<select
        name="color"
        id="color"
      

        {...formik.getFieldProps('color')}
        style={{ display: 'block' }}
      >
        <option value="" label="Select a color" disabled/>
        <option value="red" label="red" />
        <option value="blue" label="blue" />
        <option value="green" label="green" />
      </select>
        {formik.touched.color && formik.errors.color ? (
            <div>{formik.errors.color}</div>
          ) : null}

          <button type="submit">Submit</button>
        </form>
      )}
    </Formik>
  );
};