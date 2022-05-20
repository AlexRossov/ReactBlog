import React from 'react';
import { Navigate, useParams, useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';

import { updatePost } from '../redux/actions/posts';

export const UpdatePost = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const posts = useSelector((state) => state.posts);

  const post = posts.find((obj) => obj.id === Number(id));

  const [fields, setFields] = React.useState({
    id: post.id,
    title: post.title,
    imageUrl: post.imageUrl,
    discription: post.discription,
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

  const onClickUpdatePost = (fields) => {
    if (window.confirm(`Сохранить изменения в статье №${fields.id}?`)) {
      dispatch(updatePost(fields));
      alert('Статья успешно обновлена!');
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
    onClickUpdatePost(fields);
    navigate('/');
  };

  return (
    <>
      <h3>Это страница администратора</h3>
      <h4>Здесь Вы можете внести изменения в статью</h4>
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
            Сохранить изменения в статье
          </Button>
        </Form>
      </div>
    </>
  );
};
