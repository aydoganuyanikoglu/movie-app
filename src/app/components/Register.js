'use client'

import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { countryList, LikedMovies } from '../index.js';
import styles from '../styles/registerpage.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const validationSchema = Yup.object({
  name: Yup.string()
    .matches(/^[A-Za-z]+$/, 'Name must only contain letters') 
    .required('Name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .matches(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,}$/, 'Email must end with .com')
    .required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
  country: Yup.string()
    .required('Country is required')
});

const Register = () => {
  const router = useRouter(); 

  const handleSubmit = (values, { resetForm }) => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = storedUsers.some(user => user.email === values.email);

    if (userExists) {
      alert('Email address already registered.');
      return; 
    }

    const newValues = {
      ...values,LikedMovies: [],isLiked: {}
    }
    storedUsers.push(newValues);
    localStorage.setItem('users', JSON.stringify(storedUsers));
    alert('Registration is Successful!');
    resetForm();
    router.push('/login');
  };


  return (
    <div className={styles.registerContainer}>
      <div className={styles.formContainer}>
        <h1>Sign Up</h1>
        <Formik
          initialValues={{ name: '', email: '', password: '', country: '' }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form className={styles.form}>
              <div className={styles.name}>
                <label htmlFor="name" className={`${errors.name && touched.name ? styles.error : (touched.name && !errors.name ? styles.success : '')}`}>Name</label>
                <Field
                  className={`${styles.input} ${errors.name && touched.name ? styles.errorInput : (touched.name && !errors.name ? styles.successInput : '')}`}
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name.."
                />
                <ErrorMessage name="name" component="div" className={styles.error} />
              </div>
              <div className={styles.email}>
                <label htmlFor="email" className={`${errors.email && touched.email ? styles.error : (touched.email && !errors.email ? styles.success : '')}`}>Email</label>
                <Field
                  className={`${styles.input} ${errors.email && touched.email ? styles.errorInput : (touched.email && !errors.email ? styles.successInput : '')}`}
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email.."
                />
                <ErrorMessage name="email" component="div" className={styles.error} />
              </div>
              <div className={styles.password}>
                <label htmlFor="password" className={`${errors.password && touched.password ? styles.error : (touched.password && !errors.password ? styles.success : '')}`}>Password</label>
                <Field
                  className={`${styles.input} ${errors.password && touched.password ? styles.errorInput : (touched.password && !errors.password ? styles.successInput : '')}`}
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password.."
                />
                <ErrorMessage name="password" component="div" className={styles.error} />
              </div>
              <div className={styles.country}>
                <label htmlFor="country" className={`${errors.country && touched.country ? styles.error : (touched.country && !errors.country ? styles.success : '')}`}>Country</label>
                <Field className={`${styles.input} ${errors.country && touched.country ? styles.errorInput : (touched.country && !errors.country ? styles.successInput : '')}`} as="select" id="country" name="country">
                  <option value="" disabled>Select your country</option>
                  {countryList.map((country, index) => (
                    <option key={index} value={country}>
                      {country}
                    </option>
                  ))}
                </Field>
                <ErrorMessage name="country" component="div" className={styles.error} />
              </div>
              <div className={styles.buttonContainer}>
                <button type="submit" className={styles.registerButton}>Register</button>
              </div>
            </Form>
          )}
        </Formik>
        <div className={styles.containerBottom}>
          <Link href="/login" className={styles.bottomLinks}>Already have an account?</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
