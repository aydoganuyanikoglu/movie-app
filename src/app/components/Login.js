'use client'

import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { useAuth } from '../contexts/AuthContext'
import styles from '../styles/loginpage.module.scss'
import Link from 'next/link'


const validationSchema = Yup.object({
    email: Yup.string()
    .email('Invalid email address')
    .matches(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,}$/, 'Email must end with .com')
    .required('Email is required'),
    password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .required('Password is required')
});

const Login = () => {
    const {login} = useAuth()

    const handleSubmit = (values, { resetForm }) => {
        const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
        const user = storedUsers.find(user => user.email === values.email && user.password === values.password);
        
        if (user) {
            login(user); 
            localStorage.setItem('currentUser', JSON.stringify(user));

        } else {
            alert('Invalid email or password');
        }

        resetForm();
    };
    
    return (
        <div className={styles.loginContainer}>
            <div className={styles.formContainer}>
                <h1>Sign in</h1>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ errors, touched }) => (
                        <Form className={styles.form}>
                            <div className={`${styles.email}`}>
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
                            <div className={`${styles.password}`}>
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
                            <div className={styles.buttonContainer}>
                                <button type="submit" className={styles.loginButton}>Login</button>
                            </div>
                        </Form>
                    )}
                </Formik>
                <div className={styles.containerBottom}>
                    <Link className={styles.bottomLinks} href="/forgotpassword">Forgot Password?</Link>
                    <Link className={styles.bottomLinks} href="/register">Register</Link>
                </div>
            </div>
        </div>
    )
}

export default Login
