import React from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const [fields, setFields] = React.useState({
    email: 'test@test.ru',
    password: '123456',
  });

  const navigate = useNavigate();

  const handleChangeInput = (event) => {
    setFields({
      ...fields,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    axios
      .get(
        `https://mentor.archakov.im/api/mock/login?email=${fields.email}&password=${fields.password}`,
      )
      .then((response) => {
        navigate('/profile');
        const token = response.data.token;
        window.localStorage.setItem('token', token);
      })
      .catch((error) => {
        alert('Ошибка авторизации');
        console.log(error);
      });
  };

  return (
    <div className='loginForm'>
      <Form onSubmit={onSubmit}>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>E-mail</Form.Label>
          <Form.Control
            name='email'
            onChange={handleChangeInput}
            type='email'
            value={fields.email}
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Пароль</Form.Label>
          <Form.Control
            name='password'
            onChange={handleChangeInput}
            type='password'
            value={fields.password}
            autoComplete='off'
          />
        </Form.Group>

        <Button variant='primary' type='submit'>
          Войти
        </Button>
      </Form>
    </div>
  );
};
