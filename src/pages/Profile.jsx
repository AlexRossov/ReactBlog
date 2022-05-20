import React from 'react';
import { Navigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

import { addPost } from '../redux/actions/posts';

export const Profile = () => {
  const dispatch = useDispatch();

  const [fields, setFields] = React.useState({
    title: '',
    imageUrl: '',
    discription: '',
  });

  if (!window.localStorage.getItem('token')) {
    return <Navigate to='/' />;
  }

  const handleChangeInput = (event) => {
    setFields({
      ...fields,
      [event.target.name]: event.target.value,
    });
  };

  const onClickAddPost = (fields) => {
    dispatch(addPost(fields));
    alert('Статья успешно добавлена!');
  };

  const onSubmit = (event) => {
    event.preventDefault();
    onClickAddPost(fields);
    setFields({
      title: '',
      imageUrl: '',
      discription: '',
    });
  };

  return (
    <>
      <h3>Это страница администратора</h3>
      <h4>Здесь Вы можете добавить новую статью</h4>
      <div className='addNewPostForm'>
        <Form onSubmit={onSubmit}>
          <Form.Group className='mb-3' controlId='formBasicText'>
            <Form.Label>Заголовок статьи</Form.Label>
            <Form.Control
              name='title'
              onChange={handleChangeInput}
              type='text'
              value={fields.title}
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicText'>
            <Form.Label>Ссылка на картинку 800х600</Form.Label>
            <Form.Control
              name='imageUrl'
              onChange={handleChangeInput}
              type='text'
              value={fields.imageUrl}
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicText'>
            <Form.Label>Текст статьи</Form.Label>
            <Form.Control
              as='textarea'
              name='discription'
              onChange={handleChangeInput}
              type='text'
              value={fields.discription}
            />
          </Form.Group>

          <Button variant='primary' type='submit'>
            Добавить новую статью
          </Button>
        </Form>
      </div>
    </>
  );
};
