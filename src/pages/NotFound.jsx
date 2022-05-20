import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <div className='fullPost'>
      <h2>Ничего не найдено :(</h2>
      <p className='descPost'>К сожалению у нас нет такой страницы, вернитесь на главную</p>
      <Link to='/'>
        <Button>На главную</Button>
      </Link>
    </div>
  );
};
