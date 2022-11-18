import React from 'react';
import { ErrorMessage, useField } from 'formik';

const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  if (props.textarea) {
    return (
      <div className='mb-4'>
        {label && (
          <label htmlFor={field.name} className='block text-gray-500'>
            {label}
          </label>
        )}
        <textarea
          className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 focus:outline-none block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
            meta.touched &&
            meta.error &&
            'border-1 border-red-500 error-form error-form'
          }`}
          {...field}
          {...props}
          min='4'
          rows='6'
        ></textarea>
        <ErrorMessage
          component='small'
          name={field.name}
          className='text-red-500 text-base'
        />
      </div>
    );
  } else {
    return (
      <div className='form-group px-5 mt-3'>
        {label && (
          <label htmlFor={field.name} className='block text-gray-500'>
            {label}
          </label>
        )}
        <input
          className={`rounded-lg w-full  mt-2  p-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none     dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
            meta.touched &&
            meta.error &&
            'border-1 border-red-500 error-form error-form'
          }`}
          {...field}
          {...props}
        />
        <ErrorMessage
          component='p'
          name={field.name}
          className='text-red-500 text-sm mt-2'
        />
      </div>
    );
  }
};

export default TextField;
