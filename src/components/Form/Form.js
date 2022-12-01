import React, { useState } from 'react';
import Axios from 'axios';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import './Form.scss';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const schema = yup.object().shape({
  name: yup.string().required('Name should be required please'),
  email: yup.string().email(),
  phoneNumber: yup
    .string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required(),
});

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState(0);

  const [feedback, setFeedback] = useState([]);

  const sendForm = () => {
    Axios.post('http://localhost:3001/mail', {
      name: name,
      email: email,
      phone: phone,
    }).then(() => {
      setFeedback([
        ...feedback,
        {
          name: name,
          email: email,
          phone: phone,
        },
      ]);
    });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    resolver: yupResolver(schema),
  });

  function watching() {
    watch('name');
    watch('email');
    watch('phoneNumber');
  }
  watching();

  const handleFormSubmit = (data) => {
    console.log(data);
    console.log(data.name);
    setName(data.name);
    setEmail(data.email);
    setPhone(data.phoneNumber);
    console.log(name);
    sendForm();
  };

  function Error({ errors }) {
    return <div className={'error'}>{errors ? errors.message : ' '}</div>;
  }

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <label>Name:</label>
      <input
        {...register('name')}
        type='text'
        name='name'
        onChange={(event) => {
          setName(event.target.value);
        }}
        placeholder='Your name...'
      />
      <Error errors={errors.name} />
      <label>Email:</label>
      <input
        {...register('email')}
        type='text'
        name='email'
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        placeholder='Your email...'
      />
      <Error errors={errors.email} />
      <label>Phone:</label>
      <input
        {...register('phoneNumber')}
        type='tel'
        name='phoneNumber'
        onChange={(event) => {
          setPhone(event.target.value);
        }}
        placeholder='Phone number...'
      />
      <Error errors={errors.phoneNumber} />
      <input
        type='submit'
        id='submit'
        value='Submit'
        className='submitButton'
      />
    </form>
  );
};

export default Form;
