import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import styleImg from '../../../Assets/img/banner-img-two.svg';
import './AuthStyle.css';
import TextField from '../../../Components/TextField/TextField';
import { loginUser } from '../../Redux/actions/action-creators/AuthActions';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // Login Form Initial Values
  const initialValues = {
    email: '',
    password: '',
  };
  // Error Schema
  const errorSchema = Yup.object().shape({
    email: Yup.string().email().required('Email is required'),
    password: Yup.string().required('Password  is required'),
  });
  // Form Submission
  const handleSubmit = (values, { resetForm }) => {
    let data = {
      email: values.email,
      password: values.password,
    };
    dispatch(loginUser(data, navigate));
    resetForm({
      values: '',
    });
  };

  return (
    <div className='flex w-full h-screen justify-center items-center  login-page'>
      <Formik
        initialValues={initialValues}
        validationSchema={errorSchema}
        onSubmit={handleSubmit}
      >
        {(formik) => (
          <div className='form-container p-5 flex items-center h-full w-full'>
            <img src={styleImg} className='style-img' />
            <div className='w-full'>
              <div className='heading text-center'>
                <h1 className='text-black font-g-bold text-4xl'>Login</h1>
              </div>
              <Form>
                <TextField
                  type='email'
                  label='Email'
                  name='email'
                  placeholder='Enter your email'
                />
                <TextField
                  type='password'
                  label='Password'
                  name='password'
                  placeholder='Enter your password'
                />
                <div className='form-group px-5 mt-3 text-center'>
                  <button
                    className='text-dark px-4 py-2 rounded-lg bg-white'
                    type='submit'
                    value='submit'
                  >
                    Login
                  </button>
                </div>
              </Form>
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default Login;
