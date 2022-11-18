import React from 'react';
import './AuthStyle.css';
import { useFormik } from 'formik';
import styleImg from '../../../Assets/img/banner-img-two.svg';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';

const Login = () => {
  const userEmail = 'yash@wartinlabs.com';
  const userPass = '123456789';

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      Email: '',
      Password: '',
    },
    validationSchema: Yup.object({
      Email: Yup.string().email().required('Required'),
      Password: Yup.string()
        .min(8, 'Must be 8 Charachters')
        .required('Required'),
    }),
    onSubmit: (values) => {
      if (userEmail === values.Email && userPass === values.Password) {
        const token = Math.floor(Math.random() * 5000000);
        // dispatch(loginHandler(token));
      } else {
        alert('Wrong Details');
      }
    },
  });

  return (
    <div className='flex w-full h-screen justify-center items-center  login-page'>
      <div className='form-container p-5 flex items-center h-full w-full'>
        <img src={styleImg} className='style-img' />
        <div className='w-full'>
          <div className='heading text-center'>
            <h1 className='text-black font-g-bold text-4xl'>Login</h1>
          </div>
          <form onSubmit={formik.handleSubmit}>
            <div className='form-group px-5 mt-3'>
              <label htmlFor='Email' className='text-gray-500'>
                Email
              </label>
              <input
                type='text'
                className='rounded-lg w-full  mt-2  p-2'
                placeholder='Enter Email'
                name='Email'
                value={formik.values.Email}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              {formik.touched.Email && formik.errors.Email ? (
                <p className='text-red-500 text-sm mt-2'>
                  {formik.errors.Email}
                </p>
              ) : null}
            </div>

            <div className='form-group px-5 mt-3'>
              <label htmlFor='Pssword' className='text-gray-500'>
                Password
              </label>
              <input
                type='password'
                className='rounded-lg w-full  mt-2  p-2'
                placeholder='Enter Pssword'
                name='Password'
                value={formik.values.Password}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              {formik.touched.Password && formik.errors.Password ? (
                <p className='text-red-600 text-sm mt-2'>
                  {formik.errors.Password}
                </p>
              ) : null}
            </div>

            <div className='form-group px-5 mt-3 text-center'>
              <button
                className='text-dark px-4 py-2 rounded-lg bg-white'
                type='submit'
                value='submit'
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
